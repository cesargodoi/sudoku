import { createApp } from "vue";
import App from "./App.vue";

import GameBoard from "./components/GameBoard.vue";
import GameKeyboard from "./components/GameKeyboard.vue";

const app = createApp(App);

app.component("game-board", GameBoard);
app.component("game-keyboard", GameKeyboard);

app.mount("#app");
