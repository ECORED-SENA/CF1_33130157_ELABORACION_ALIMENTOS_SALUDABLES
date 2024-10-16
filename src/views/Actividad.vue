<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nutrición y enfermedades relacionadas con la alimentación.',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los componentes de los alimentos, su función en el cuerpo humano, y las enfermedades relacionadas con una mala alimentación, así como su comprensión de los hábitos alimenticios en Colombia.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales componentes de los alimentos que proporciona energía al cuerpo?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Carbohidratos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Vitaminas.', esCorrecta: false },
            { id: 'c', texto: 'Minerales.', esCorrecta: false },
            { id: 'd', texto: 'Agua.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de grasas son consideradas malas debido a su impacto negativo en la salud?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Grasas insaturadas.', esCorrecta: false },
            { id: 'b', texto: 'Grasas poliinsaturadas.', esCorrecta: false },
            { id: 'c', texto: 'Grasas saturadas.', esCorrecta: true },
            { id: 'd', texto: 'Grasas monoinsaturadas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es un ejemplo de monosacárido?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lactosa.', esCorrecta: false },
            { id: 'b', texto: 'Maltosa.', esCorrecta: false },
            { id: 'c', texto: 'Sacarosa.', esCorrecta: false },
            { id: 'd', texto: 'Glucosa.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué enfermedad se asocia con un exceso de consumo de calorías y acumulación de grasa en el cuerpo?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diabetes.', esCorrecta: false },
            { id: 'b', texto: 'Obesidad.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Enfermedades cardiovasculares.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Hipertensión.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes vitaminas es liposoluble y se almacena en el tejido graso del cuerpo?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vitamina D.', esCorrecta: true },
            { id: 'b', texto: 'Vitamina C.', esCorrecta: false },
            { id: 'c', texto: 'Vitamina B.', esCorrecta: false },
            { id: 'd', texto: 'Vitamina A.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'El cuerpo humano no puede producir vitaminas, por lo que deben obtenerse a través de la alimentación.',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Las proteínas no participan en la reparación de tejidos y solo se encargan de transportar nutrientes.',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Las enfermedades cardiovasculares son causadas principalmente por la acumulación de grasas en las arterias.',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los carbohidratos simples, como los disacáridos, no proporcionan energía al cuerpo.',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El consumo de grasas poliinsaturadas ayuda a reducir el colesterol malo en la sangre.',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
