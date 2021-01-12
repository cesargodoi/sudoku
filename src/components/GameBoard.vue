<template>
  <div id="game-board">
    <game-line
      list="0"
      :line="game[0]"
      :playerLine="playerGame[0]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="1"
      :line="game[1]"
      :playerLine="playerGame[1]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="2"
      :line="game[2]"
      :playerLine="playerGame[2]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="3"
      :line="game[3]"
      :playerLine="playerGame[3]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="4"
      :line="game[4]"
      :playerLine="playerGame[4]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="5"
      :line="game[5]"
      :playerLine="playerGame[5]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="6"
      :line="game[6]"
      :playerLine="playerGame[6]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="7"
      :line="game[7]"
      :playerLine="playerGame[7]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-line
      list="8"
      :line="game[8]"
      :playerLine="playerGame[8]"
      :keyboardNumber="keyboardNumber"
      @confirmedNumber="confirmedNumber"
    />
  </div>
</template>

<script>
import GameLine from "./GameLine.vue";

export default {
  components: { GameLine },
  props: { game: Array, playerGame: Array, keyboardNumber: Number },
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
