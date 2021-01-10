<template>
  <div id="game-cell">
    <button>{{ playerCell }}</button>
  </div>
</template>

<script>
export default {
  props: { cell: Number, playerCell: Number },
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
