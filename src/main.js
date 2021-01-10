import { createApp } from "vue";
import App from "./App.vue";

import GameBoard from "./components/GameBoard.vue";

const app = createApp(App);

app.component("game-board", GameBoard);

app.mount("#app");
