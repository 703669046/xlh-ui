import Vue from 'vue'
import button from './button/button.md'
import buttonRound from './button/button-round.md'
import buttonPlain from "./button/button-plain.md"
import buttonDisabled from "./button/button-disabled.md"
import buttonText from "./button/button-text.md"

import link from "./link/link.md"
import linkDisabled from './link/link-disabled.md'




const Components = {
    button, //默认按钮
    buttonRound,
    buttonPlain,
    buttonDisabled,
    buttonText,
    link,
    linkDisabled
}
Object.keys(Components).forEach((key) => {
    Vue.component(`md-${key}`, Components[key])
});