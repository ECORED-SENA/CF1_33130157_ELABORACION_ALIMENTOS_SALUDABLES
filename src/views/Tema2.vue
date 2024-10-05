<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1  Componentes de los alimentos
    .row
      .col.bg-c1.order-2.order-lg-1(data-aos="fade-right")
        .p-3
          p.mb-0 Los alimentos están compuestos por una variedad de nutrientes esenciales que el cuerpo necesita para funcionar correctamente. Estos nutrientes, conocidos como los componentes de los alimentos, incluyen carbohidratos, proteínas, grasas, vitaminas, minerales y agua. Cada uno de estos elementos desempeña un papel fundamental en el mantenimiento de la salud y el bienestar, proporcionando energía, favoreciendo el crecimiento y reparando los tejidos del cuerpo.
      .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 280px").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Carbohidratos
    .row.bg-c3
      .col-12
        .px-5
          p(data-aos="fade-right") Los carbohidratos son moléculas formadas por átomos de carbono, hidrógeno y oxígeno, también conocidos como hidratos de carbono o glúcidos. Constituyen uno de los principales componentes de los alimentos y se encuentran en una amplia variedad de ellos.
          .row.align-items-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 500px").m-auto
            .col-lg-7(data-aos="fade-left")
              p.mb-0 Los carbohidratos presentes en los alimentos son los responsables de proporcionar energía al cuerpo. Esta energía se genera a partir de la descomposición de los carbohidratos en glucosa, que es transportada a través de la sangre para alimentar a las células. La glucosa suministra la energía necesaria para el funcionamiento adecuado de los músculos, la regulación de la presión arterial, el mantenimiento de la temperatura corporal, el desempeño de los órganos internos y, especialmente, para que el cerebro y el sistema nervioso central funcionen correctamente.
          .row.align-items-center.mb-5
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.svg', alt='', style="width: 70px").m-auto
            .col(data-aos="fade-left")
              p.mb-0 Los carbohidratos son, en esencia, moléculas de azúcar que se clasifican según la cantidad de unidades que los componen. Los carbohidratos formados por una sola molécula de azúcar se denominan #[b monosacáridos]; aquellos que tienen dos moléculas, #[b disacáridos]; los que contienen entre 3 y 9 moléculas se conocen como #[b oligosacáridos]; y, finalmente, los #[b polisacáridos] son carbohidratos compuestos por más de 10 moléculas de azúcar.
          .row.justify-content-center.mb-5
            .col-auto.col-lg-8
              .p-4.bg-c4(data-aos="fade-down")
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
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Los monosacáridos son moléculas de azúcar simples, compuestas por entre tres y siete átomos de carbono. No pueden hidrolizarse, lo que significa que no reaccionan con el agua para dividirse en moléculas más simples. Son los carbohidratos más básicos, y todas las demás clases de carbohidratos están formadas por estos.
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='', style='width: 70px')
          .col
            .p-3.bg-c6
              p.mb-0 Los monosacáridos son una fuente clave de energía para las células, ya que se oxidan fácilmente y reaccionan con el oxígeno para generar energía. Las mitocondrias de las células utilizan estos monosacáridos para producir la energía que permite el correcto funcionamiento del cuerpo humano. 
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 500px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-3.bg-c2(data-aos="fade-up")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img7.svg', alt='', style="width: 80px").m-auto
            .col
              p.mb-0 Los monosacáridos se nombran con el sufijo "osa" y se clasifican según el número de átomos de carbono que contienen. Por ejemplo, los monosacáridos con tres átomos de carbono se llaman triosas; los de cuatro, tetrosas; los de cinco, pentosas; los de seis, hexosas; y los de siete, heptosas.
    p.mb-5(data-aos="fade-right") Dentro de estas categorías, encontramos los siguientes monosacáridos principales:
    .row.bg-c7.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1
            .p-4.p-lg-5
                SlyderA(tipo="b")(data-aos="fade-left")
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
      .col.bg-c8.order-2.order-lg-1(data-aos="fade-right")
        .p-3
          p.mb-0 Los disacáridos son un tipo de carbohidratos o glúcidos formados por la unión de dos moléculas de azúcar, también llamadas monosacáridos. Son una parte importante de la dieta humana, ya que proporcionan energía y elementos esenciales para el funcionamiento adecuado de los órganos. Los disacáridos son compuestos químicos que pueden formarse por la combinación de dos moléculas de azúcar iguales o diferentes. En ellos se produce un proceso llamado hidrólisis, en el que se libera una molécula de agua, permitiendo la unión de los monosacáridos para formar nuevos compuestos.
      .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 360px").m-auto
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='', style="width: 300px").m-auto
      .col-lg-9(data-aos="fade-left")
        p Los principales disacáridos son:
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Lactosa")
            .col.mb-4.mb-md-0
              p.mb-0 Es un disacárido presente en la leche, conocido como el "azúcar de la leche". Proporciona energía y nutrientes, especialmente vital para los bebés durante la lactancia. Está compuesto por los monosacáridos galactosa y glucosa.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img11.svg', alt='', style="width: 150px").m-auto
          .row(numero="2" titulo="Sacarosa")
            .col.mb-4.mb-md-0
              p.mb-0 Es el azúcar común utilizado para endulzar alimentos y bebidas. Formada por glucosa y fructosa, se presenta en forma cristalina y sin olor. Al ser absorbida, produce un aumento rápido de energía.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img12.svg', alt='', style="width: 150px").m-auto
          .row(numero="3" titulo="Maltosa")
            .col.mb-4.mb-md-0
              p.mb-0 Aunque no es esencial para el organismo humano, es ampliamente utilizada en la industria de las bebidas alcohólicas, transformándose en maltitol para la fabricación de productos como whisky. También se usa en jarabes, dulces, chocolates y productos para diabéticos.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', alt='', style="width: 150px").m-auto
    .row.mb-4
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
          .col
            h3.text-white.mb-1 Oligosacáridos
    .row.justify-content-center.mb-5
      .col-10.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 470px").m-auto
          p.mb-2 #[b Inulina]
          p.mb-0 La inulina es un oligosacárido formado por cadenas de fructosa, presente en raíces y tubérculos. Es un componente común en la dieta occidental. AI ser ingeridam las moléculas de fructosa se liberan durante la digestión, proporcionando beneficios al bienestar general del cuerpo humano.
      .col-10.col-lg-5(data-aos="fade-left")
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
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Los polisacáridos están formados por la unión de numerosas moléculas de monosacáridos, con cadenas moleculares compuestas por más de diez unidades. Cumplen diversas funciones en el organismo, principalmente ayudando a mantener reservas de energía. Los polisacáridos se descomponen en el cuerpo humano en moléculas más pequeñas a través del proceso de hidrólisis. A continuación, se describen algunos de los polisacáridos más importantes:
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
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
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 400px").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Proteínas
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Las proteínas están formadas por cadenas lineales de aminoácidos. Un aminoácido se define como una molécula orgánica compuesta por un grupo amino y un grupo carboxilo. Todas las proteínas contienen una base de elementos químicos, tales como carbono, hidrógeno, oxígeno y nitrógeno. Algunas también incluyen azufre, fósforo, hierro, magnesio y cobre, entre otros.
        .row
          .col-12
            .p-3.bg-c9
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img14.svg', alt='', style='width: 70px')
                .col
                  p.mb-0 Las proteínas son macromoléculas esenciales para el cuerpo humano, ya que desempeñan funciones vitales que garantizan el correcto funcionamiento de los órganos, los músculos y las células.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='', style="width: 380px").m-auto
    .row.bg-c7.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1
            .p-4.p-lg-5
                SlyderA(tipo="b")(data-aos="fade-down")
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Estructura celular]
                      p.mb-0 Las proteínas son responsables de la estructura y estabilidad de las células, asegurando su correcto funcionamiento.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img13.png', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Mantenimiento de la integridad celular]
                      p.mb-0 Algunas proteínas se encargan de mantener la integridad y cohesión de las células, evitando su deterioro.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img14.png', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Mecanismos de defensa]
                      p.mb-0 Proteínas que juegan un papel crucial en el sistema inmunológico, protegiendo el cuerpo de infecciones y enfermedades.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Reparación de daños]
                      p.mb-0 Las proteínas ayudan en la reparación de tejidos dañados, facilitando la regeneración y el proceso de curación.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img16.png', alt='', style="width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-lg-6.mb-4.mb-lg-0
                      p #[b Regulación de funciones celulares]
                      p.mb-0 Muchas proteínas actúan como reguladoras, controlando procesos celulares fundamentales para el correcto funcionamiento del organ 
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img17.png', alt='', style="width: 400px").m-auto
    p.mb-5(data-aos="fade-right") Generalmente, las proteínas actúan uniéndose a otras moléculas de proteína para formar estructuras más grandes, o bien se asocian con moléculas distintas para apoyar los procesos de anticuerpos, enzimas, hormonas, etc. La función de una proteína depende de su tipo y puede clasificarse en las siguientes categorías:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-3.bg-c4(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img18.png', alt='', style='width: 180px').m-auto
            .col
              p.mb-0 #[b Función estructural]
              p.mb-0 Algunas proteínas se combinan con las membranas celulares para fortalecer su estructura, actúan como receptores y facilitan el transporte de sustancias. Un ejemplo de estas son las glicoproteínas, compuestas por una proteína unida a varios glúcidos o carbohidratos.
    p.mb-5(data-aos="fade-right") Unas proteínas básicas llamadas histonas cumplen la función de regular la expresión de los genes en los cromosomas, ya que forman parte de estos. Además, hay algunas proteínas que le otorgan elasticidad y resistencia a los órganos y tejidos del cuerpo humano, como por ejemplo el colágeno, la elastina y la queratina.
    .row.align-items-center
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Función enzimática")
            .col-12
              p.mb-0 Las proteínas actúan como catalizadoras de las reacciones bioquímicas, participando en la descomposición de alimentos y procesos como la coagulación de la sangre.
          .row(numero="2" titulo="Función hormonal")
            .col-12
              p.mb-0 Algunas hormonas proteicas, como la insulina y el glucagón, regulan los niveles de glucosa en sangre y el metabolismo de otras sustancias, como el calcio.
          .row(numero="3" titulo="Función reguladora")
            .col-12
              p.mb-0 Proteínas regulan la transcripción genética y la división celular, asegurando que las células funcionen adecuadamente.
          .row(numero="4" titulo="Función homeostática")
            .col-12
              p.mb-0 Las proteínas mantienen el equilibrio osmótico y regulan el pH en las células, evitando la pérdida o ganancia de agua en su interior.
          .row(numero="5" titulo="Función defensiva")
            .col-12
              p.mb-0 Proteínas como las inmunoglobulinas actúan como anticuerpos, y otras como la trombina y el fibrinógeno ayudan en la coagulación para prevenir hemorragias.
          .row(numero="6" titulo="Función de transporte")
            .col-12
              p.mb-0 Las proteínas transportan sustancias esenciales como el oxígeno (hemoglobina y mioglobina) y lípidos (lipoproteínas) en el cuerpo.
          .row(numero="7" titulo="Función contráctil")
            .col-12
              p.mb-0 Proteínas como la actina y la miosina regulan la contracción y el estiramiento muscular, formando las miofibras responsables de estos movimientos.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img19.png', alt='', style="width: 300px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Grasas
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Al igual que los carbohidratos, las grasas son un conjunto de moléculas orgánicas cuyo principal componente es el carbono e hidrógeno. También se les denomina lípidos, aunque es importante señalar que los lípidos abarcan una mayor variedad de compuestos, mientras que las grasas corresponden únicamente a un subconjunto de estos. Las grasas están presentes en los alimentos y son componentes esenciales de la dieta.
        p.mb-0 Al igual que los carbohidratos, las grasas son un conjunto de moléculas orgánicas cuyo principal componente es el carbono y el hidrógeno.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img20.png', alt='', style="width: 380px").m-auto
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="fade-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p EI tipo de grasa más común en el cuerpo humano son los triglicéridos, que se transportan a través de la sangre y provienen de las grasas consumidas durante la digestión. Los triglicéridos suministran energía a los órganos y músculos internos, y también pueden almacenarse como grasa.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img21.png', alt='', style="width: 270px").m-auto
    .row.bg-c10
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") A continuación, se muestran las diferentes clasificaciones de las grasas:
          .row.mb-4
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
                .col
                  h3.text-white.mb-1 Grasas saturadas
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 Estas grasas están compuestas por ácidos grasos saturados, donde cada átomo de carbono está unido a átomos de hidrógeno. Se encuentran en una amplia variedad de alimentos, como carnes, mantequilla, queso, leche, helados, embutidos, dulces, pasteles y salsas. En el ámbito dietético, las grasas saturadas se conocen como "grasas malas" porque su consumo excesivo puede causar enfermedades y problemas circulatorios debido a la acumulación de colesterol.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img23.png', alt='', style="width: 380px").m-auto
          .row.mb-4
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.pe-0
                  figure
                    img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 50px')
                .col
                  h3.text-white.mb-1 Grasas insaturadas
          .row.mb-5
            .col.bg-c8.order-2.order-lg-1(data-aos="fade-right")
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema2/img15.svg', alt='', style='width: 70px')
                  .col
                    p.mb-0 Están compuestas por átomos de carbono con enlaces dobles, lo que las hace líquidas a temperatura ambiente, conocidas comúnmente como aceites. Se consideran "grasas buenas" porque, al reemplazar a las grasas saturadas en la dieta, ayudan a reducir los niveles de colesterol en la sangre. Las grasas insaturadas se dividen en:
            .col-lg-auto.ps-lg-0.mb-4.mb-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img24.png', alt='', style="width: 280px").m-auto
          p.mb-5(data-aos="fade-right") Las grasas insaturadas se clasifican en grasas monoinsaturadas y grasas poliinsaturadas.
          .row.justify-content-center
            .col-10.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c9
                figure.mb-3
                  img(src='@/assets/curso/tema2/img25.png', alt='', style="width: 470px").m-auto
                p.mb-2 #[b Grasas monoinsaturadas]
                p.mb-0 Ayudan a reducir los niveles de colesterol LDL, conocido como el "colesterol malo", que dificulta la correcta circulación sanguínea. Estas grasas se encuentran en aceites como el de oliva y girasol, frutos secos, maíz, salmón, róbalo, trucha y pan integral. Contienen colesterol HDL, o "colesterol bueno", que elimina el exceso de colesterol LDL y previene la acumulación de grasa en los vasos sanguíneos.
            .col-10.col-lg-5(data-aos="fade-left")
              .p-4.bg-c9
                figure.mb-3
                  img(src='@/assets/curso/tema2/img26.png', alt='', style="width: 470px").m-auto
                p.mb-2 #[b Grasas poliinsaturadas]
                p.mb-0 También consideradas beneficiosas, están compuestas por ácidos grasos poliinsaturados con enlaces dobles entre los átomos de carbono. Dentro de esta categoría se encuentran los ácidos grasos omega, conocidos por sus efectos positivos en la salud general.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Vitaminas
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Las vitaminas son compuestos químicos esenciales que el organismo necesita para su correcto funcionamiento. Son indispensables para la vida y el desarrollo adecuado del cuerpo humano, ya que contribuyen al crecimiento normal y a múltiples funciones vitales.
        .row
          .col-12
            .p-3.bg-c9
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img16.svg', alt='', style='width: 70px')
                .col
                  p.mb-0 Como el cuerpo no puede producirlas por sí mismo, es necesario obtenerlas a través de la alimentación. Se requieren 13 tipos diferentes de vitaminas: A, C, D, E, K, y ocho del grupo B. Cada una tiene funciones específicas en el cuerpo, y una deficiencia de cualquiera de ellas puede dar lugar a enfermedades.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img27.png', alt='', style="width: 380px").m-auto
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img28.png', alt='', style="width: 300px").m-auto
      .col-lg-9(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Vitamina A")
            .col.mb-4.mb-md-0
              p.mb-0 Conocida como retinol, es liposoluble. Se encuentra en carne, pescado, pollo y lácteos. Contribuye a la salud de dientes y piel.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img29.png', alt='', style="width: 250px").m-auto
          .row(numero="2" titulo="Vitamina B")
            .col.mb-4.mb-md-0
              p.mb-0 Grupo de vitaminas que incluye tiamina, riboflavina, niacina, ácido pantoténico, piridoxina, biotina, ácido fólico y cobalamina. Participan en el metabolismo y formación de glóbulos rojos.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img30.png', alt='', style="width: 250px").m-auto
          .row(numero="3" titulo="Vitamina C")
            .col.mb-4.mb-md-0
              p.mb-0 Hidrosoluble, ayuda al crecimiento y reparación de tejidos. Se encuentra en frutas cítricas, fresas, mango, y vegetales como brócoli y espinaca.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img31.png', alt='', style="width: 250px").m-auto
          .row(numero="4" titulo="Vitamina D")
            .col.mb-4.mb-md-0
              p.mb-0 Liposoluble, facilita la absorción de calcio y fósforo. Vital para el desarrollo óseo, se obtiene de lácteos, pescados y leche de soya.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img32.png', alt='', style="width: 250px").m-auto
          .row(numero="5" titulo="Vitamina E")
            .col.mb-4.mb-md-0
              p.mb-0 Liposoluble, antioxidante que protege los tejidos. Se encuentra en aceites vegetales, nueces y cereales.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img33.png', alt='', style="width: 250px").m-auto
          .row(numero="6" titulo="Vitamina K")
            .col.mb-4.mb-md-0
              p.mb-0 Liposoluble, esencial para la coagulación sanguínea y la salud circulatoria. Presente en hortalizas de hoja verde como espinaca y lechuga.
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img34.png', alt='', style="width: 250px").m-auto
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Minerales
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-3.bg-c9
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img14.svg', alt='', style='width: 70px')
                .col
                  p.mb-0 Los minerales son sustancias naturales compuestas por moléculas formadas por átomos de uno o más elementos químicos. Son esenciales para la salud del cuerpo humano, ya que proporcionan los nutrientes necesarios para su correcto funcionamiento. Los minerales se dividen en dos clasificaciones: macrominerales, que deben consumirse en grandes cantidades, y microminerales, que se requieren en cantidades mínimas.
        p.mb-0 Los #[b macrominerales] incluyen el azufre, cloro, calcio, fósforo, magnesio, potasio y sodio. Entre los #[b microminerales] se encuentran el cobre, zinc, hierro, manganeso, yodo, flúor, cobalto y selenio. Cada mineral tiene funciones específicas y se obtiene de diferentes fuentes. Por ejemplo:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img35.png', alt='', style="width: 380px").m-auto
    .row.bg-c11
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img36.png', alt='', style="width: 300px").m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img37.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Calcio]
                  p.text-center.mb-0 Fundamental para la estructura ósea y la contracción muscular.
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img38.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Fósforo]
                  p.text-center.mb-0 Participa en la formación de los huesos.
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img39.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Magnesio]
                  p.text-center.mb-0 Forma parte de los huesos y colabora en contracciones musculares y en la actividad enzimática.
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img40.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Sodio]
                  p.text-center.mb-0 Principal catión extracelular, regula el equilibrio osmótico y las propiedades eléctricas celulares.
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img41.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Potasio]
                  p.text-center.mb-0 Principal catión intracelular, mantiene el equilibrio hídrico e influye en las propiedades eléctricas celulares.
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img42.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Cloro]
                  p.text-center.mb-0 Acompaña al sodio y al potasio, colaborando en el equilibrio de estos cationes.
                .tarjeta.color-acento-botones.p-4.shadow
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img43.png', alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .py-2.px-3.bg-c4
                        p.mb-0 #[b Azufre]
                  p.text-center.mb-0 Regula la estructura de los tejidos conectivos de la piel y forma parte de algunas enzimas.
          p.mb-5(data-aos="fade-right") Por otro lado, los microminerales también cumplen funciones vitales:
          .row.justify-content-center(data-aos="fade-left")
            .col-10.col-md-6.col-lg-3.mb-4
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img45.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Hierro]
                      p.mb-0 Es crucial para proteínas como la hemoglobina, que transporta oxígeno en la sangre.
            .col-10.col-md-6.col-lg-3.mb-4
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img46.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Cobre]
                      p.mb-0 Facilita la movilización el hierro.
            .col-10.col-md-6.col-lg-3.mb-4
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img47.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Zinc]
                      p.mb-0 Apoya el sistema inmunitario.
            .col-10.col-md-6.col-lg-3.mb-4
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img48.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Manganeso]
                      p.mb-0 Participa en la síntesis de ácidos grasos y hormonas.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img49.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Yodo]
                      p.mb-0 Es fundamental para la síntesis de hormonas tiroideas.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img50.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Flúor]
                      p.mb-0 Fortalece los huesos y proviene las caries dentales.
            .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img51.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Cobalto]
                      p.mb-0 Estimula el buen funcionamiento de las células rojas y ayuda a regular los niveles de azúcar en sangre.
            .col-10.col-md-6.col-lg-3
              .bg-c12
                figure.px-0 
                  img(src='@/assets/curso/tema2/img52.png', alt='', style="width: 370px").m-auto
                .row
                  .col-12
                    .p-4
                      p #[b Selenio]
                      p.mb-0 Actúa como antioxidante, protegiendo al cuerpo del daño celular.

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
