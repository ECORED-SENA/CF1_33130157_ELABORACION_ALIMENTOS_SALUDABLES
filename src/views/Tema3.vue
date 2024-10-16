<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Enfermedades causadas por mala alimentación
    p.mb-5(data-aos="fade-right") Las enfermedades causadas por una mala alimentación son actualmente un problema de gran relevancia. Los hábitos alimenticios influyen de manera significativa en la salud de las personas, y el consumo excesivo de ciertos alimentos o la eliminación completa de otros puede provocar diversas enfermedades. A continuación, se describen algunas de las principales enfermedades derivadas de una mala alimentación:
    .row.bg-c7.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1
            .p-4.p-lg-5
                SlyderA(tipo="b")(data-aos="fade-down")
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Obesidad]
                      p.mb-0 La obesidad es una enfermedad común en todo el mundo, causada por la ingesta de más calorías de las que se gastan, lo que lleva a la acumulación de grasa y un aumento de peso. La OMS considera a una persona obesa cuando tiene un IMC igual o superior a 30. Esta condición puede llevar a problemas de salud como enfermedades cardiovasculares, hipertensión, diabetes, problemas respiratorios como la reducción de la capacidad pulmonar, fatiga y sudoración excesiva. También se relaciona con problemas gastrointestinales, incluyendo cálculos biliares, reflujo esofágico e incluso cáncer de colon.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Enfermedades cardiovasculares]
                      p.mb-0 Las enfermedades cardiovasculares ocurren cuando el flujo de sangre hacia el corazón o desde el corazón hacia el cuerpo se interrumpe. Los malos hábitos alimenticios y los altos niveles de grasa en el cuerpo pueden provocar la acumulación de colesterol en las arterias, lo que lleva a la arteriosclerosis, una condición en la que las arterias se endurecen y bloquean debido a los depósitos de grasa (ateromas). Esto aumenta el riesgo de infartos porque las arterias obstruidas no permiten que la sangre llegue adecuadamente al músculo cardíaco. También puede llevar a trombosis, donde se forman coágulos de sangre que bloquean el flujo sanguíneo.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Diabetes]
                      p La diabetes mellitus es una enfermedad que afecta el metabolismo de los carbohidratos debido a desequilibrios en las hormonas y enzimas que regulan este proceso. Principalmente afecta al páncreas, que produce insulina. La insulina es crucial para que el cuerpo absorba los nutrientes de los carbohidratos. Su deficiencia provoca hiperglucemia, es decir, niveles elevados de azúcar en la sangre. Esta condición reduce la tolerancia al azúcar y causa pérdida de glucosa a través de los riñones, lo que aumenta la sed y la necesidad de agua. Existen dos tipos principales:
                      ul.lista-ul
                        li.d-flex
                          i.lista-ul__vineta
                          |
                          p.mb-0 #[b Diabetes tipo 1], donde el sistema inmunológico ataca la insulina del cuerpo.
                        li.d-flex
                          i.lista-ul__vineta
                          |
                          p.mb-0 #[b Diabetes tipo 2], donde el cuerpo no produce suficiente insulina o no la utiliza adecuadamente.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 400px").m-auto
    .row.mb-4
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
          .col
            h3.text-white.mb-1 Alimentación en Colombia
    p.mb-5(data-aos="fade-right") La #[b Encuesta Nacional de la Situación Nutricional en Colombia (ENSIN)] de 2015 reveló datos alarmantes sobre la salud nutricional en el país, mostrando que los problemas derivados de la malnutrición han tenido un aumento considerable, particularmente el sobrepeso y la obesidad.
    .row.justify-content-center.mb-5
      .col-lg-6.bg-c1.order-2.order-lg-1(data-aos="fade-right")
        .p-3
          p.mb-0 Estos problemas se observan en más de la mitad de la población adulta, con el 37.7 % en condición de sobrepeso y el 18.7 % en obesidad. Esto se atribuye en gran parte a la creciente adopción de dietas con alimentos procesados y la disminución de actividades físicas.
      .col-lg-3.ps-md-0.mb-4.mb-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 300px").m-auto
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p En cuanto al consumo de alimentos, la ENSIN determinó que el 66.8 % de los colombianos consume frutas de manera diaria, pero solo el 28.1 % ingiere verduras y hortalizas con regularidad, lo que refleja una baja incorporación de estos alimentos esenciales en la dieta. Además, el 85.3 % de los colombianos consume carnes y huevos diariamente.
        p.mb-0 La encuesta también resaltó importantes deficiencias de micronutrientes, especialmente en la infancia.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 380px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-3.bg-c4(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img6.png', alt='', style='width: 180px').m-auto
            .col
              p.mb-0 #[b Por ejemplo, el 27.3 % de los niños de 1 a 4 años presentan deficiencia de vitamina A, y el 36 % de estos niños tienen bajos niveles de zinc. La prevalencia de anemia en mujeres en edad fértil fue del 15 %, con un impacto mayor en poblaciones indígenas y afrodescendientes.]
    .row.align-items-center(data-aos="fade-left")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema3/img1.svg', alt='', style='width: 80px').m-auto
      .col
        p.mb-0 Estos datos subrayan la necesidad de políticas públicas orientadas a mejorar la educación nutricional, promover una dieta equilibrada y reducir la dependencia de alimentos procesados. Asimismo, es vital abordar las deficiencias nutricionales, sobre todo en grupos vulnerables, para mejorar las condiciones de salud y calidad de vida a largo plazo en Colombia.

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
