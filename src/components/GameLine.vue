<template>
  <div id="game-line">
    <game-cell :cell="line[0]" :playerCell="playerLine[0]" />
    <game-cell :cell="line[1]" :playerCell="playerLine[1]" />
    <game-cell :cell="line[2]" :playerCell="playerLine[2]" />
    <game-cell :cell="line[3]" :playerCell="playerLine[3]" />
    <game-cell :cell="line[4]" :playerCell="playerLine[4]" />
    <game-cell :cell="line[5]" :playerCell="playerLine[5]" />
    <game-cell :cell="line[6]" :playerCell="playerLine[6]" />
    <game-cell :cell="line[7]" :playerCell="playerLine[7]" />
    <game-cell :cell="line[8]" :playerCell="playerLine[8]" />
  </div>
</template>

<script>
import GameCell from "./GameCell.vue";
export default {
  components: { GameCell },
  props: { line: Array, playerLine: Array },
};
</script>

<style scoped>
#game-line {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
