<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Historia de los alimentos
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p La alimentación, tanto para el ser humano como para cualquier otro ser vivo, es una necesidad vital. Desde tiempos inmemoriales, el ser humano ha buscado medios para satisfacer esta necesidad, y con el paso del tiempo ha descubierto diversas formas de hacerlo, lo que lo ha llevado a adquirir costumbres y hábitos alimenticios. Desde la antigüedad, el hombre ha utilizado su inteligencia para obtener su sustento.
        .row
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style="width: 200px").m-auto
          .col.bg-c1
            .p-3
              p.mb-0 La antropología ha determinado que, durante gran parte de la existencia humana, la caza y la recolección de frutos silvestres fueron las principales fuentes de alimento. Sin embargo, también se ha planteado que, antes de desarrollar habilidades de caza, el hombre se comportaba como un carroñero, alimentándose de los restos que dejaban otros animales cazadores. Cabe destacar que esta etapa fue breve.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img3.svg', alt='', style="width: 380px").m-auto
    p.mb-5 Cuando los seres humanos aprendieron a utilizar rocas y ramas como herramientas, dieron el paso hacia la caza activa, ya que esto les permitió fabricar y emplear utensilios para dicha actividad.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-3.bg-c2
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img4.svg', alt='', style="width: 80px").m-auto
            .col
              p.mb-0 En un principio, los humanos eran nómadas, desplazándose de un lugar a otro en busca de alimento. Recolectaban frutos silvestres y cazaban, pero cuando los recursos comenzaban a escasear, se veían obligados a migrar a otros territorios.
    .row.align-items-center
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 80px").m-auto
      .col
        p.mb-0 Con el tiempo, el ser humano aprendió a cultivar sus propios alimentos y a domesticar animales. Estos avances dieron origen a las prácticas de la agricultura y la ganadería, lo que permitió que el hombre se volviera autosuficiente y controlara sus propias fuentes de alimento. Este hecho lo condujo a adoptar un estilo de vida sedentario.
      
</template>

<script>
export default {
  name: 'Tema1',
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
