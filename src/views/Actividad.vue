<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Mantenimiento de transmisiones manuales',
      titulo: 'Cuestionario',
      introduccion:
        'Reconocer el mantenimiento, desmontaje, inspección, ensamblaje e instalación de transmisiones manuales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una de las principales causas de fallas en la transmisión manual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenimiento deficiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desgaste natural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Errores en el diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Combustible de mala calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué se debe hacer antes de desmontar una transmisión?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retirar el aceite del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar un diagnóstico adecuado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desmontar el eje de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar el tipo de embrague.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué herramienta es recomendada para sostener la transmisión al desmontarla?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una llave inglesa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un gato o dispositivo similar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un destornillador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un martillo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué indica la presencia de partículas de color bronce en la caja de cambios?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Engranajes desgastados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rodamientos dañados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sincronizadores o arandelas defectuosas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fallas en el eje de salida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el objetivo del manual de servicio al trabajar con transmisiones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ahorrar tiempo en la reparación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir costos de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proveer referencias específicas para el mantenimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar todas las piezas dañadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué acción es necesaria después de instalar una transmisión?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar los cables eléctricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Llenar de aceite la transmisión al nivel adecuado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar ajustes al cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los engranajes desgastados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué herramienta se utiliza para inspeccionar la holgura de los anillos sincronizadores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un destornillador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una galga.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un martillo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un calibrador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una recomendación al reemplazar un engranaje del eje de salida?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No es necesario reemplazar otros engranajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cambiar también el engranaje correspondiente del eje secundario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar un martillo para el ajuste.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar los ruidos generados por el desgaste.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El procedimiento para ensamblar componentes sigue el mismo orden que el desarmado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un diagnóstico adecuado puede evitar desmontajes innecesarios de la transmisión.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el componente que conecta el motor con la transmisión?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Piñón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Embrague.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eje secundario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Engranaje principal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué se debe hacer con los sellos durante el reemplazo de piezas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo cambiar los dañados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar todos los sellos para evitar fugas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No considerar los sellos si parecen en buen estado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limpiar los sellos viejos y reutilizarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué se utiliza para mover libremente la transmisión al alinearla con el motor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un destornillador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un patrón circular con la carcasa de extensión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un calibrador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una llave inglesa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué indica un desgaste significativo en los dientes de los engranajes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un mantenimiento eficiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La necesidad de reemplazar el engranaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que la transmisión está lista para ensamblar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que no hay fallas significativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué pieza debe engrasarse antes de instalar una transmisión?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El eje secundario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El anillo sincronizador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El rodamiento piloto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La carcasa del embrague.',
              esCorrecta: false,
            },
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
}
</script>
