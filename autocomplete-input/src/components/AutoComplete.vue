<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  suggestions: string[]
}>()
const userInput = ref<string>('')
const arrowCounter = ref<number>(-1)
const showSuggestions = ref<boolean>(false)

const matches = computed<string[]>(() => {
  const userInputLower = userInput.value.toLowerCase()
  return props.suggestions.filter((s) =>
    s.toLowerCase().includes(userInputLower)
  )
})

const highlightMatches = (
  text: string
): Array<string | { highlight: boolean; text: string }> => {
  const textMatcher = new RegExp(userInput.value, 'ig')
  const result: Array<string | { highlight: boolean; text: string }> = []
  let lastIndex = 0

  text.replace(textMatcher, function (match, index) {
    // Add the non-matched portion
    result.push(text.substring(lastIndex, index))
    // Add the matched portion with a flag indicating it should be highlighted
    result.push({ highlight: true, text: match })
    lastIndex = index + match.length
    return match
  })

  // Add the remaining non-matched portion
  result.push(text.substring(lastIndex))
  return result
}

function onChange(event: Event): void {
  if (!(event instanceof InputEvent)) {
    return
  }
  userInput.value = (event.target as HTMLInputElement).value
  showSuggestions.value = true
}

function selectSuggestion(selectedSuggestion: string): void {
  userInput.value = selectedSuggestion
  showSuggestions.value = false
}

function handleKeyChange(e: KeyboardEvent): void {
  const maxIndex = matches.value.length - 1
  switch (e.key.toUpperCase()) {
    case 'ARROWUP':
      e.preventDefault()
      if (arrowCounter.value > 0) {
        arrowCounter.value--
      } else {
        arrowCounter.value = maxIndex
      }
      scrollIntoView()
      break
    case 'ARROWDOWN':
      e.preventDefault()
      if (arrowCounter.value < maxIndex) {
        arrowCounter.value++
      } else {
        arrowCounter.value = 0
      }
      scrollIntoView()
      break
    case 'ENTER':
      e.preventDefault()
      selectSuggestion(matches.value[arrowCounter.value])
      showSuggestions.value = false
      break
    case 'TAB':
      // Handle Tab key
      if (e.shiftKey) {
        // Handle shift + Tab (reverse tab order)
        e.preventDefault()
        if (arrowCounter.value > 0) {
          arrowCounter.value--
          scrollIntoView()
        } else {
          arrowCounter.value = maxIndex
          scrollIntoView()
        }
      } else {
        // Handle regular Tab key
        e.preventDefault()
        if (arrowCounter.value < maxIndex) {
          arrowCounter.value++
          scrollIntoView()
        } else {
          arrowCounter.value = 0
          scrollIntoView()
        }
      }
      break
  }
}

function onFocus(): void {
  showSuggestions.value = true
}

function onBlur(): void {
  setTimeout(() => {
    showSuggestions.value = false
  })
}

const suggestionsContainerRef = ref<HTMLElement | null>(null)

function scrollIntoView(): void {
  const activeElement =
    suggestionsContainerRef.value?.querySelector('.is-active')

  if (activeElement) {
    activeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    })
  }
}
</script>
<template>
  <div id="app" class="input__container">
    <div class="input__field">
      <input
        v-model="userInput"
        placeholder="Please type here"
        class="input"
        type="text"
        @input="onChange"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="handleKeyChange"
      />
      <font-awesome-icon
        v-if="showSuggestions"
        icon="fa-solid fa-chevron-up"
        class="chevron-icon"
      ></font-awesome-icon>
      <font-awesome-icon
        v-else
        icon="fa-solid fa-chevron-down"
        class="chevron-icon"
      ></font-awesome-icon>
    </div>
    <div
      v-if="showSuggestions"
      ref="suggestionsContainerRef"
      class="input__options"
    >
      <ul>
        <li
          v-for="(match, i) in matches"
          :key="i"
          tabindex="-1"
          :class="{ 'is-active': i === arrowCounter }"
          @click="selectSuggestion(match)"
          @mousedown.prevent
        >
          <span v-for="(segment, j) in highlightMatches(match)" :key="j">
            <span v-if="typeof segment === 'string'">{{ segment }}</span>
            <span v-else-if="segment.highlight" class="input__highlight">{{
              segment.text
            }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.chevron-icon {
  margin: 5px;
}

.rotate {
  animation: rotateChevron 1s ease-out;
}

@keyframes rotateChevron {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
}

.input__highlight {
  font-weight: bold;
  background-color: #e8e8e8;
}

.input__container {
  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 400px;
  margin: 0 auto;
}

.input__field {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  margin: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}

.input {
  flex: 1 1 auto;
  padding: 12px 18px;
  overflow: hidden;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #444;
  appearance: none;
  background-color: transparent;
  background-image: none;
  background-repeat: no-repeat;
  background-position: right 12px top 12px;
  background-size: 22px;
  border: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.input__options {
  width: 100%;
  max-width: 400px;
  max-height: 212.5px;
  margin-top: 5px;
  overflow: auto;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  list-style-type: none;
}

li {
  padding: 12px 18px;
  margin: 0;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease all;

  &::before {
    content: none;
  }

  .is-active {
    background-color: #fff;
  }

  &.is-active,
  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
