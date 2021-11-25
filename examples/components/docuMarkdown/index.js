import Vue from 'vue'
import button from './button/button.md'
import buttonRound from './button/button-round.md'
import buttonPlain from "./button/button-plain.md"
import buttonDisabled from "./button/button-disabled.md"




const Components = {
    button, //默认按钮
    buttonRound,
    buttonPlain,
    buttonDisabled,
}
Object.keys(Components).forEach((key) => {
    Vue.component(`md-${key}`, Components[key])
});