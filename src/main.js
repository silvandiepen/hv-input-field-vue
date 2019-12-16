import Vue from "vue";
import App from "./App.vue";

import { applyPolyfills, defineCustomElements } from "hv-input-field/loader";

applyPolyfills().then(() => {
	defineCustomElements(window);
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["input-field", /hv-\w*/];
Vue.config.chainWebpack = (config) => config.resolve.symlinks(false);

new Vue({
	render: (h) => h(App)
}).$mount("#app");
