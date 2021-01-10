<template>
  <div id="game-board">
    <game-line :line="game[0]" />
    <game-line :line="game[1]" />
    <game-line :line="game[2]" />
    <game-line :line="game[3]" />
    <game-line :line="game[4]" />
    <game-line :line="game[5]" />
    <game-line :line="game[6]" />
    <game-line :line="game[7]" />
    <game-line :line="game[8]" />
  </div>
</template>

<script>
import GameLine from "./GameLine.vue";

export default {
  components: { GameLine },
  props: { game: Array },
};
</script>

<style scoped>
#game-board {
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("~@/assets/grid.png");
}
</style>
