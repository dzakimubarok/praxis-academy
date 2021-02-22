<template>
  <div class="home">
    <header>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h3>Mobile Legend: Beng Beng</h3>
    </header>
    <main>
      <ul>
        <li>
          <img :src="hero.gambar" />
          <p>{{ hero.nama }}</p>
          <p>Jenis Hero: <em></em></p>
        </li>
      </ul>
    </main>
    <footer>
      <p>&copy; 2020 - Dzaki Fauzi Mubarok</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data: function () {
    return {
      hero: {
        nama: "Aurora",
        type: "Mage",
        gambar: "aurora.jpg",
      },
    };
  },
};
</script>
