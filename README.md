# it-vue3-countdown

> Customize Countdown timer with Flip Animation for [Vue](https://vuejs.org/ "Vue Homepage") 3.x

## Table of contents


- [Demo](#demo)
- [Installation](#installation)
- [Global Usage](#global-usage)
- [Single File Component Usage](#single-file-component-usage)
- [Emits](#emits)
- [Props](#props)
- [Requirements](#requirements)
- [License](#license)

## Installation

npm
```
npm i it-vue3-countdown --save
```

yarn
```
yarn add it-vue3-countdown --save
```

## Global Usage
main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import Countdown from 'it-vue3-countdown'
createApp(App).use(Countdown).mount('#app')
```

App.vue
```js
<template>
  <Countdown />
</template>

<script>

export default {
  name: 'App',
  components: {
    Countdown,
  }
}
</script>
```

## Single File Component Usage
```vue
<template>
  <Countdown />
</template>

<script>
import {Countdown} from 'it-vue3-countdown'
export default {
  name: 'App',
  components: {
    Countdown
  }
}
</script>
```

## Emits

| Name | Description |
| --- | --- |
| timeElapsed | event that created when the time came |

## Props

| Name | Type | Default |
| --- | --- | --- |
| deadlineISO | String<br>YYYY-MM-DDTHH:mm:ss.sssZ |  |
| deadline | String<br>YYYY-MM-DD HH:mm:ss | 32d,0h,0m,10s |
| deadlineDate | Date |  |
| countdownSize | String | 3rem |
| labelSize | String | 1.2rem |
| flipAnimation | Boolean | true |
| mainColor | String | '#EC685C' |
| secondFlipColor | String | props.mainColor |
| mainFlipBackgroundColor | String | '#222222' |
| secondFlipBackgroundColor | String | '#393939' |
| labelColor | String | '#222222' |
| showLabels | Boolean | true |
| stop | Boolean |  |
| showDays | Boolean | true |
| showHours | Boolean | true |
| showMinutes | Boolean | true |
| showSeconds | Boolean | true |
| labels | Object | {days: 'Days',hours: 'Hours',minutes: 'Minutes',seconds: 'Seconds',} |

## Requirements

- [Vue](https://vuejs.org/) version **3.x.x**

## License

[MIT](https://choosealicense.com/licenses/mit/) Copyright (c) 2023, [Itartweb](https://github.com/itartweb)
