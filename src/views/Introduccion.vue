<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col.order-2.order-md-1(data-aos="fade-right")
        p.mb-0 La alimentación es un proceso fundamental para la vida, ya que proporciona los nutrientes necesarios para el funcionamiento adecuado del cuerpo. A lo largo de la historia, la humanidad ha desarrollado diversas formas de obtener y preparar los alimentos, lo que ha dado lugar a diferentes hábitos y costumbres alimenticias. Estos hábitos han influido en la salud y el bienestar de las personas a lo largo del tiempo.
      .col-md-auto.mb-4.mb-md-0.order-1.order-mb-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 140px").m-auto
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p Los alimentos están compuestos por distintos nutrientes esenciales como los carbohidratos, proteínas, grasas, vitaminas y minerales. Cada uno de estos componentes cumple funciones vitales en el cuerpo humano, como proporcionar energía, mantener el equilibrio celular y apoyar el crecimiento y desarrollo de los órganos. Una dieta equilibrada que incluya todos estos nutrientes es clave para prevenir enfermedades y mantener la salud.
        .col-lg-4
          figure
            img(src='@/assets/curso/intro/img2.svg', alt='', style="width: 270px").m-auto
    .row
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 380px").m-auto
      .col-lg-8(data-aos="fade-left")
        p Sin embargo, una mala alimentación, caracterizada por el consumo excesivo o la carencia de ciertos alimentos, puede llevar al desarrollo de problemas graves de salud. Enfermedades como la obesidad, la diabetes y los trastornos cardiovasculares están directamente relacionadas con los hábitos alimenticios. Por ello, es fundamental promover una dieta equilibrada que contribuya a una mejor calidad de vida.
        figure
          img(src='@/assets/curso/intro/img3.svg', alt='', style="width: 290px")
        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
