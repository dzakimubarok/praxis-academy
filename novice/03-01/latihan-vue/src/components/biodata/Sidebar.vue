<template>
  <div id="sidebar">
    <p>{{ name }}</p>
    <p>{{ alamat }}</p>
    <p>{{ sekolah }}</p>
  </div>
</template>

<script>
export default {
  name: "biodata",
  data: function () {
    return {
      name: "Dzaki",
      alamat: "jalan karawangsari",
      sekolah: "SMA Negeri Awan",
    };
  },
};
</script>

<style>
#sidebar {
  border: 1px solid black;
  text-align: center;
}
</style>