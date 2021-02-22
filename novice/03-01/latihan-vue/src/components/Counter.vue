<template>
  <div id="button1">
    <button @click="tambah">Add 1</button>
    <p>{{ counter }}</p>
    <button @click="minus">kurang</button>
  </div>
</template> 

<script>
export default {
  name: "button1",
  data: function () {
    return {
      counter: 1,
    };
  },
  methods: {
    tambah: function () {
      this.counter += 1;
    },
    minus: function () {
      this.counter -= 1;
    },
  },
};
</script>

<style>
</style>