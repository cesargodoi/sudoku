<template>
  <div id="game">
    <h1>Sudoku</h1>
    <game-board :game="game" />
    <game-keyboard @setNumber="setNumber" />
  </div>
</template>

<script>
import "./css/global.css";

const mockeGame = [
  [6, 5, 3, 1, 9, 8, 4, 2, 7],
  [9, 2, 7, 4, 6, 5, 8, 3, 1],
  [4, 1, 8, 7, 3, 2, 6, 9, 5],
  [8, 9, 5, 3, 4, 7, 1, 6, 2],
  [7, 6, 1, 5, 2, 9, 3, 8, 4],
  [2, 3, 4, 8, 1, 6, 7, 5, 9],
  [5, 8, 6, 9, 7, 4, 2, 1, 3],
  [3, 4, 2, 6, 5, 1, 9, 7, 8],
  [1, 7, 9, 2, 8, 3, 5, 4, 6],
];

export default {
  name: "App",
  data() {
    return {
      game: mockeGame,
      selectedNumber: null,
    };
  },
  methods: {
    setNumber(num) {
      this.selectedNumber = num;
    },
  },
};
</script>

<style></style>
