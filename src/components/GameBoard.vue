<template>
  <div id="game-board">
    <game-line
      index="0"
      :line="game[0]"
      :playerLine="playerGame[0]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="1"
      :line="game[1]"
      :playerLine="playerGame[1]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="2"
      :line="game[2]"
      :playerLine="playerGame[2]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="3"
      :line="game[3]"
      :playerLine="playerGame[3]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="4"
      :line="game[4]"
      :playerLine="playerGame[4]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="5"
      :line="game[5]"
      :playerLine="playerGame[5]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="6"
      :line="game[6]"
      :playerLine="playerGame[6]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="7"
      :line="game[7]"
      :playerLine="playerGame[7]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      index="8"
      :line="game[8]"
      :playerLine="playerGame[8]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
  </div>
</template>

<script>
import GameLine from "./GameLine.vue";

export default {
  components: { GameLine },
  props: { game: Array, playerGame: Array, selectedNumber: Number },
  methods: {
    confirmedNumber(list, pos, num) {
      this.$emit("confirmedNumber", list, pos, num);
    },
  },
  emits: ["confirmedNumber"],
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
