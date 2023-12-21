<script setup lang="ts">
import { ref, computed } from 'vue'

const userInput = ref<string>('')
const arrowCounter = ref<number>(-1)
const showSuggestions = ref<boolean>(false)

const props = defineProps<{
  suggestions: string[]
}>()

const matches = computed<string[]>(() => {
  const userInputLower = userInput.value.toLowerCase()
  return props.suggestions.filter((s) => s.toLowerCase().includes(userInputLower))
})

const highlightMatches = (text: string): string => {
  var textMatcher = new RegExp(userInput.value, 'ig')

  return text.replace(textMatcher, function (match) {
    return '<strong>' + match + '</strong>'
  })
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

function handleKeyChange(key: 'up' | 'down' | 'enter'): void {
  switch (key) {
    case 'up':
      if (arrowCounter.value > 0) {
        arrowCounter.value--
      }
      break
    case 'down':
      if (arrowCounter.value < matches.value.length) {
        arrowCounter.value++
      }
      break
    case 'enter':
      selectSuggestion(matches.value[arrowCounter.value])
      showSuggestions.value = false
      break
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
        @keydown.up="() => handleKeyChange('up')"
        @keydown.down="() => handleKeyChange('down')"
        @keydown.enter="() => handleKeyChange('enter')"
      />
    </div>
    <div v-if="showSuggestions" class="input__options">
      <ul>
        <li
          v-for="(match, i) in matches"
          :key="i"
          @click="selectSuggestion(match)"
          @mousedown.prevent
          :class="{ 'is-active': i === arrowCounter }"
        >
          <span v-html="highlightMatches(match)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.input__container {
  margin: 0 auto;
  max-width: 400px;
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0;

  .input__field {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 48px;
    padding: 2px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    align-items: center;
  }
}

.input {
  flex: 1 1 auto;
  padding: 12px 18px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
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
  position: absolute;
  font-family: 'Roboto', sans-serif;
  z-index: 5;
  width: 100%;
  max-height: 250px;
  overflow: auto;
  background: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

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
      background-color: #e5e5e5;
    }

    &.is-active,
    &:hover {
      background-color: #e5e5e5;
    }

    .highlight {
      font-weight: 700 !important;
      font-size: 32px;
    }
  }
}
</style>
