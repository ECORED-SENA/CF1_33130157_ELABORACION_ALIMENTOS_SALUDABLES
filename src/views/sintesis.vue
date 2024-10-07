<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis presenta los aspectos importantes de la nutrición y las enfermedades causadas por una mala alimentación. Se organiza en cinco ramas principales: componentes de los alimentos, enfermedades causadas por mala alimentación, y hábitos alimenticios en Colombia. Los componentes incluyen carbohidratos, proteínas, grasas, vitaminas y minerales. Las enfermedades destacadas son obesidad, enfermedades cardiovasculares y diabetes. Los hábitos alimenticios en Colombia se clasifican en lácteos, frutas, verduras y hortalizas, y carnes y huevos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
