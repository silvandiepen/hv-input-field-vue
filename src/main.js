import Vue from "vue";
import App from "./App.vue";

import { applyPolyfills, defineCustomElements } from "hv-styleguide/loader";

applyPolyfills().then(() => {
	defineCustomElements(window);
	/* eslint-disable */
	console.log(defineCustomElements);
});

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["hv-input-field", /hv-\w*/];
Vue.config.chainWebpack = (config) => config.resolve.symlinks(false);

new Vue({
	render: (h) => h(App)
}).$mount("#app");
