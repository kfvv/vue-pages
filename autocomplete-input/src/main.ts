/* Set up using Vue 3 */
import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

/* add icons to the library */
library.add(faChevronUp, faChevronDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
