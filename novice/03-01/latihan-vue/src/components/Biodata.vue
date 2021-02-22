<template>
  <div id="wrapping">
    <HelloWorld />
    <div id="flex">
      <div id="left"><Sidebar /></div>
      <div id="right"><Isi /></div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./biodata/HelloWorld.vue";
import Sidebar from "./biodata/Sidebar.vue";
import Isi from "./biodata/Isi.vue";

export default {
  components: {
    HelloWorld,
    Sidebar,
    Isi,
  },
};
</script>
<style>
#wrapping {
  height: 70vh;
  border: 1px solid black;
}
#flex {
  display: flex;
  flex-direction: row;
}
#left {
  flex-grow: 6;
  border: 1px solid red;
  height: 69vh;
}

#right {
  flex-grow: 6;
  border: 1px solid green;
  height: 69vh;
}
</style>