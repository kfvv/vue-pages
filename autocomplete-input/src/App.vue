<script setup lang="ts">
import AutoCompleteInput from './components/AutoComplete.vue'

const nameData = [
  'Melinda Wilder',
  'Amir Craft',
  'Brett West',
  'Buffy Schwartz',
  'Edan Dillon',
  'Ruth Jackson',
  'Debra Allen',
  'Gerald Harris',
  'Raymond Carter',
  'Jacqueline Torres',
  'Joseph Nelson',
  'Carlos Sanchez',
  'Ralph Clark',
  'Jean Alexander',
  'Stephen Roberts',
  // 'Eric Long',
  // 'Amanda Scott',
  // 'Teresa Diaz',
  // 'Wanda Thomas',
]
</script>
<template>
  <header>
    <div class="wrapper">
      <h1>Autocomplete input component</h1>
    </div>
  </header>
  <main>
    <div class="parent__container">
      <div class="autocomplete__input-container">
        <div class="parent__main">
          <AutoCompleteInput :suggestions="nameData" />
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
header {
  line-height: 1.5;
}

.parent__main {
  height: 100%;
  padding-top: 50px;
  background: #f8f8f7;
  border-radius: 8px;
}

.parent__container {
  width: 100%;
  height: 500px;
  transition:
    width 2s,
    height 2s;
}

.autocomplete__input-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@media (width >= 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }
}
</style>
