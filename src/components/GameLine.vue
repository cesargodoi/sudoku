<template>
  <div id="game-line">
    <game-cell
      :cell="line[0]"
      :playerCell="playerLine[0]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[1]"
      :playerCell="playerLine[1]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[2]"
      :playerCell="playerLine[2]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[3]"
      :playerCell="playerLine[3]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[4]"
      :playerCell="playerLine[4]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[5]"
      :playerCell="playerLine[5]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[6]"
      :playerCell="playerLine[6]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[7]"
      :playerCell="playerLine[7]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
    />
    <game-cell
      :cell="line[8]"
      :playerCell="playerLine[8]"
      :keyboardNumber="keyboardNumber"
      @getPosition="getPosition"
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
    keyboardNumber: Number,
    list: String,
  },
  methods: {
    getPosition(num) {
      const pos = this.line.indexOf(num);
      this.$emit("confirmedNumber", Number(this.list), pos, num);
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
