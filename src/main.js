import { createApp } from "vue";
import App from "./App.vue";
import AOSPlugin from "./plugins/aos";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS
import "./index.css"; // Ensure this is after other CSS imports to override if necessary

const app = createApp(App);

app.use(AOSPlugin);

app.mount("#app");

// Initialize AOS
app.config.globalProperties.$aos.init();
