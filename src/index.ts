import {createApp} from "vue";
import SmartyUI from "./entry";
// main.ts
// import {SButton} from "./entry";
// import SFCButton from './SFCButton.vue'
// import JSXButton from './JSXButton'


createApp({
    template: `
     <div>
    <SButton color="blue">蓝色按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
 </div>
    `
}).use(SmartyUI)
    .mount('#app')
