<template>
  <div id="keyboard">
    <button
      v-for="num in keys"
      :key="num"
      :class="{ inUse: inUse(num) }"
      @click="getNumber(num)"
    >
      {{ num }}
    </button>
  </div>
</template>

<script>
export default {
  name: "keyboard",
  data() {
    return {
      keys: "123456789",
      num: "",
    };
  },
  methods: {
    getNumber(num) {
      this.num = +num;
      this.$emit("setNumber", +num);
    },
    inUse(num) {
      return this.num === +num ? true : false;
    },
  },
  emits: ["setNumber"],
};
</script>

<style scoped>
#keyboard {
  width: 380px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  width: 38px;
  height: 38px;
  margin: 2px;
  font-size: 14pt;
  font-weight: bolder;
  border: 1px #42c096 solid;
  border-radius: 5px;
}

button:hover {
  background-color: wheat;
  opacity: 0.7;
}

.inUse {
  background-color: #42c096;
}
</style>
