<template>
  <div id="game-board">
    <game-line :line="game[0]" :playerLine="playerGame[0]" />
    <game-line :line="game[1]" :playerLine="playerGame[1]" />
    <game-line :line="game[2]" :playerLine="playerGame[2]" />
    <game-line :line="game[3]" :playerLine="playerGame[3]" />
    <game-line :line="game[4]" :playerLine="playerGame[4]" />
    <game-line :line="game[5]" :playerLine="playerGame[5]" />
    <game-line :line="game[6]" :playerLine="playerGame[6]" />
    <game-line :line="game[7]" :playerLine="playerGame[7]" />
    <game-line :line="game[8]" :playerLine="playerGame[8]" />
  </div>
</template>

<script>
import GameLine from "./GameLine.vue";

export default {
  components: { GameLine },
  props: { game: Array, playerGame: Array },
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
