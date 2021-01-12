<template>
  <div id="game">
    <h1>Sudoku</h1>
    <game-board
      :game="game"
      :playerGame="playerGame"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-keyboard @setNumber="setNumber" />
  </div>
</template>

<script>
import "./css/global.css";
import { genPlayerBoard, mockeGame } from "./sudoku.js";

export default {
  name: "App",
  data() {
    return {
      game: mockeGame,
      playerGame: genPlayerBoard(1),
      keyboardNumber: null,
    };
  },
  methods: {
    setNumber(num) {
      this.keyboardNumber = num;
    },
    confirmedNumber(list, pos, num) {
      this.playerGame[list][pos] = num;
    },
  },
};
</script>

<style></style>
