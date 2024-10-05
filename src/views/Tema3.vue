<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Enfermedades causadas por mala alimentación
    p.mb-5(data-aos="fade-right") Las enfermedades causadas por una mala alimentación son actualmente un problema de gran relevancia. Los hábitos alimenticios influyen de manera significativa en la salud de las personas, y el consumo excesivo de ciertos alimentos o la eliminación completa de otros puede provocar diversas enfermedades. A continuación, se describen algunas de las principales enfermedades derivadas de una mala alimentación:

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
