import { createApp } from "vue";
import App from "./App.vue";
import "./services/firebase";
import router from "./router/router.js";
import store from "./store/store";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";
import { createRulesPlugin } from "vuetify/labs/rules";
import { vuetifyRules } from "./services/vuetifyValidations";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

const customRulesPlugin = createRulesPlugin(vuetifyRules, vuetify.locale);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(customRulesPlugin);
app.use(Toast);

app.mount("#app");
