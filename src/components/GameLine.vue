<template>
  <div id="game-line">
    <game-cell
      :cell="line[0]"
      :playerCell="playerLine[0]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[1]"
      :playerCell="playerLine[1]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[2]"
      :playerCell="playerLine[2]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[3]"
      :playerCell="playerLine[3]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[4]"
      :playerCell="playerLine[4]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[5]"
      :playerCell="playerLine[5]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[6]"
      :playerCell="playerLine[6]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[7]"
      :playerCell="playerLine[7]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
    <game-cell
      :cell="line[8]"
      :playerCell="playerLine[8]"
      :selectedNumber="selectedNumber"
      @confirmedNumber="confirmedNumber"
    />
  </div>
</template>

<script>
import GameCell from "./GameCell.vue";
export default {
  components: { GameCell },
  props: {
    line: Array,
    playerLine: Array,
    selectedNumber: Number,
    index: String,
  },
  methods: {
    confirmedNumber(num) {
      const pos = this.line.indexOf(num);
      this.$emit("confirmedNumber", this.index, pos, num);
    },
  },
  emits: ["confirmedNumber"],
};
</script>

<style scoped>
#game-line {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
