<template>
  <div id="game">
    <h1>Sudoku</h1>
    <game-board />
    <game-keyboard @setNumber="setNumber" />
  </div>
</template>

<script>
import "./css/global.css";

export default {
  name: "App",
  data() {
    return {
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
