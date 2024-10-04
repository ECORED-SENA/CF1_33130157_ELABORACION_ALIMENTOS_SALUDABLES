<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Componentes de los alimentos
    .row
      .col.bg-c1.order-2.order-lg-1
        .p-3
          p.mb-0 Los alimentos están compuestos por una variedad de nutrientes esenciales que el cuerpo necesita para funcionar correctamente. Estos nutrientes, conocidos como los componentes de los alimentos, incluyen carbohidratos, proteínas, grasas, vitaminas, minerales y agua. Cada uno de estos elementos desempeña un papel fundamental en el mantenimiento de la salud y el bienestar, proporcionando energía, favoreciendo el crecimiento y reparando los tejidos del cuerpo.
      .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 280px").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Carbohidratos
    .row.bg-c3
      .col-12
        .px-5
          p Los carbohidratos son moléculas formadas por átomos de carbono, hidrógeno y oxígeno, también conocidos como hidratos de carbono o glúcidos. Constituyen uno de los principales componentes de los alimentos y se encuentran en una amplia variedad de ellos.
          .row.align-items-center.mb-4
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 500px").m-auto
            .col-lg-7
              p.mb-0 Los carbohidratos presentes en los alimentos son los responsables de proporcionar energía al cuerpo. Esta energía se genera a partir de la descomposición de los carbohidratos en glucosa, que es transportada a través de la sangre para alimentar a las células. La glucosa suministra la energía necesaria para el funcionamiento adecuado de los músculos, la regulación de la presión arterial, el mantenimiento de la temperatura corporal, el desempeño de los órganos internos y, especialmente, para que el cerebro y el sistema nervioso central funcionen correctamente.
          .row.align-items-center.mb-5
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img2.svg', alt='', style="width: 70px").m-auto
            .col
              p.mb-0 Los carbohidratos son, en esencia, moléculas de azúcar que se clasifican según la cantidad de unidades que los componen. Los carbohidratos formados por una sola molécula de azúcar se denominan #[b monosacáridos]; aquellos que tienen dos moléculas, #[b disacáridos]; los que contienen entre 3 y 9 moléculas se conocen como #[b oligosacáridos]; y, finalmente, los #[b polisacáridos] son carbohidratos compuestos por más de 10 moléculas de azúcar.
          .row.justify-content-center.mb-5
            .col-auto.col-lg-8
              .p-4.bg-c4
                figure.d-none.d-lg-block
                  img(src='@/assets/curso/tema2/img3.svg', alt='', style="width: 600px").m-auto
                figure.d-block.d-lg-none
                  img(src='@/assets/curso/tema2/img3m.svg', alt='', style="width: 200px").m-auto
    .row.mb-4
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
          .col
            h3.text-white.mb-1 Monosacáridos
    .row.justify-content-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p Los monosacáridos son moléculas de azúcar simples, compuestas por entre tres y siete átomos de carbono. No pueden hidrolizarse, lo que significa que no reaccionan con el agua para dividirse en moléculas más simples. Son los carbohidratos más básicos, y todas las demás clases de carbohidratos están formadas por estos.
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='', style='width: 70px')
          .col
            .p-3.bg-c6
              p.mb-0 Los monosacáridos son una fuente clave de energía para las células, ya que se oxidan fácilmente y reaccionan con el oxígeno para generar energía. Las mitocondrias de las células utilizan estos monosacáridos para producir la energía que permite el correcto funcionamiento del cuerpo humano. 
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 500px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-3.bg-c2
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img7.svg', alt='', style="width: 80px").m-auto
            .col
              p.mb-0 Los monosacáridos se nombran con el sufijo "osa" y se clasifican según el número de átomos de carbono que contienen. Por ejemplo, los monosacáridos con tres átomos de carbono se llaman triosas; los de cuatro, tetrosas; los de cinco, pentosas; los de seis, hexosas; y los de siete, heptosas.
    p.mb-5 Dentro de estas categorías, encontramos los siguientes monosacáridos principales:
    .row.bg-c7.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1
            .p-4.p-lg-5
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Glucosa]
                      p.mb-0 Es un monosacárido esencial para el organismo, ya que es un componente clave de la sangre. La mayoría de los carbohidratos consumidos se transforman en glucosa en el hígado. El nivel de glucosa en la sangre, conocido como glucemia, debe mantenerse dentro de un rango adecuado para el correcto funcionamiento del cuerpo. Un nivel demasiado bajo o alto de glucosa puede causar problemas en los músculos y órganos internos. La glucosa está presente en muchos alimentos, especialmente en aquellos endulzados con azúcar, como chocolates, dulces, cereales, mermeladas, refrescos, bebidas energéticas, postres, productos lácteos, salsas y frutas.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img8.svg', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Fructosa]
                      p.mb-0 Este monosacárido, compuesto por seis átomos de carbono, se encuentra principalmente en las frutas. Al llegar al hígado, la fructosa se convierte en glucosa para suministrar energía a las células. Es un componente esencial para endulzar jugos de frutas naturales y bebidas gaseosas. Además de las frutas, la fructosa también se encuentra en vegetales y miel.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img9.svg', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Galactosa]
                      p.mb-0 Este monosacárido, también de seis átomos de carbono, se encuentra en la leche. Al ingresar al cuerpo, la galactosa se transforma en glucosa, por lo que también actúa como una fuente de energía. Además, es importante para el funcionamiento de las células cerebrales.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img10.svg', alt='', style="width: 400px").m-auto
    .row.mb-4
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
          .col
            h3.text-white.mb-1 Disacáridos
    .row.mb-5
      .col.bg-c8.order-2.order-lg-1
        .p-3
          p.mb-0 Los disacáridos son un tipo de carbohidratos o glúcidos formados por la unión de dos moléculas de azúcar, también llamadas monosacáridos. Son una parte importante de la dieta humana, ya que proporcionan energía y elementos esenciales para el funcionamiento adecuado de los órganos. Los disacáridos son compuestos químicos que pueden formarse por la combinación de dos moléculas de azúcar iguales o diferentes. En ellos se produce un proceso llamado hidrólisis, en el que se libera una molécula de agua, permitiendo la unión de los monosacáridos para formar nuevos compuestos.
      .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 360px").m-auto
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='', style="width: 300px").m-auto
      .col-lg-9
        p Los principales disacáridos son:
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Lactosa")
            .col
              p.mb-0 Es un disacárido presente en la leche, conocido como el "azúcar de la leche". Proporciona energía y nutrientes, especialmente vital para los bebés durante la lactancia. Está compuesto por los monosacáridos galactosa y glucosa.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img11.svg', alt='', style="width: 150px")
          .row(numero="2" titulo="Sacarosa")
            .col
              p.mb-0 Es el azúcar común utilizado para endulzar alimentos y bebidas. Formada por glucosa y fructosa, se presenta en forma cristalina y sin olor. Al ser absorbida, produce un aumento rápido de energía.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img12.svg', alt='', style="width: 150px")
          .row(numero="3" titulo="Maltosa")
            .col
              p.mb-0 Aunque no es esencial para el organismo humano, es ampliamente utilizada en la industria de las bebidas alcohólicas, transformándose en maltitol para la fabricación de productos como whisky. También se usa en jarabes, dulces, chocolates y productos para diabéticos.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', alt='', style="width: 150px")
    .row.mb-4
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
          .col
            h3.text-white.mb-1 Oligosacáridos
    .row.justify-content-center.mb-5
      .col-10.col-lg-5.mb-4.mb-lg-0
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 470px").m-auto
          p.mb-2 #[b Inulina]
          p.mb-0 La inulina es un oligosacárido formado por cadenas de fructosa, presente en raíces y tubérculos. Es un componente común en la dieta occidental. AI ser ingeridam las moléculas de fructosa se liberan durante la digestión, proporcionando beneficios al bienestar general del cuerpo humano.
      .col-10.col-lg-5
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 470px").m-auto
          p.mb-2 #[b Oligofructosa]
          p.mb-0 Este oligosacárido se utiliza como edulcorante artificial, dando un sabor dulce a los alimentos. Es ampliamente empleado en jarabes comerciales y, al producirse de manera natural, se ha convertido en un ingrediente clave en la elaboración de productos alimenticios saludables.
    .row.mb-4
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
          .col
            h3.text-white.mb-1 Polisacáridos
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1
        p Los polisacáridos están formados por la unión de numerosas moléculas de monosacáridos, con cadenas moleculares compuestas por más de diez unidades. Cumplen diversas funciones en el organismo, principalmente ayudando a mantener reservas de energía. Los polisacáridos se descomponen en el cuerpo humano en moléculas más pequeñas a través del proceso de hidrólisis. A continuación, se describen algunos de los polisacáridos más importantes:
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row.align-items-center(titulo="Almidón")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Es un polisacárido cuyo componente principal es la glucosa. Se encuentra en las plantas y su función principal es almacenar energía. Está presente en grandes cantidades en raíces como la yuca, tubérculos como las papas, así como en cereales, arroz, frutas y semillas. Cuando las personas consumen almidón, obtienen una cantidad significativa de energía. El almidón se distingue de otros carbohidratos por presentarse en forma de gránulos o partículas, y no es soluble en agua.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img10.png', alt='', style="width: 200px").m-auto
          .row.align-items-center(titulo="Almidón")
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Similar al almidón, el glucógeno es un polisacárido que actúa como reserva energética y está compuesto por cadenas de glucosa. Es insoluble en agua y, al mezclarse con esta, forma dispersiones de sólidos coloidales. Después de la digestión, el glucógeno se almacena principalmente en el hígado, aunque también se distribuye en menor medida en los músculos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img11.png', alt='', style="width: 200px").m-auto
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
