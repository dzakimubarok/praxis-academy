<template>
  <div id="app">
    <div id=""><Biodata /></div>
    <div id=""><Counter /></div>
    <!-- <div id="side"><Sidebar /></div>
    <div id="isi"><Isi /></div> -->
  </div>
</template>

<script>
import Biodata from "./components/Biodata";
import Counter from "./components/Counter";
export default {
  name: "App",
  components: {
    Biodata,
    Counter,
  },
};
</script>

<style scoped>
#header {
  border: 30 px solid black;
}
</style>
