<template>
  <div id="game-board">
    <game-line />
    <game-line />
    <game-line />
    <game-line />
    <game-line />
    <game-line />
    <game-line />
    <game-line />
    <game-line />
  </div>
</template>

<script>
import GameLine from "./GameLine.vue";

export default {
  components: { GameLine },
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
