<template>
  <div id="game-cell">
    <button :style="showNumber" @click="checkEquals">{{ playerCell }}</button>
  </div>
</template>

<script>
export default {
  props: { cell: Number, playerCell: Number, keyboardNumber: Number },
  computed: {
    showNumber() {
      return { color: this.playerCell !== 0 ? "#1f412d" : "#dfc8a9" };
    },
  },
  methods: {
    checkEquals() {
      if (this.cell === this.keyboardNumber) {
        this.$emit("getPosition", this.keyboardNumber);
      }
    },
    emits: ["getPosition"],
  },
};
</script>

<style scoped>
button {
  margin: 2px 2px;
  width: 38px;
  height: 38px;
  font-size: 14pt;
  font-weight: bold;
  background-color: #dfc8a9;
  border: 0;
  cursor: pointer;
}

button:hover {
  opacity: 0.5;
}
</style>
