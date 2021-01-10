<template>
  <div id="game-line">
    <game-cell :cell="line[0]" />
    <game-cell :cell="line[1]" />
    <game-cell :cell="line[2]" />
    <game-cell :cell="line[3]" />
    <game-cell :cell="line[4]" />
    <game-cell :cell="line[5]" />
    <game-cell :cell="line[6]" />
    <game-cell :cell="line[7]" />
    <game-cell :cell="line[8]" />
  </div>
</template>

<script>
import GameCell from "./GameCell.vue";
export default {
  components: { GameCell },
  props: { line: Array },
};
</script>

<style scoped>
#game-line {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
