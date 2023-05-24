import {App} from "vue";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import SButton from "./button";

// 单独导出组件
export {
    SFCButton,
    JSXButton,
    SButton
}



// 编写一个插件，通过install方法来注册组件
export default {
    install(app: App): void {
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
        app.component(SButton.name, SButton);
    }
}
