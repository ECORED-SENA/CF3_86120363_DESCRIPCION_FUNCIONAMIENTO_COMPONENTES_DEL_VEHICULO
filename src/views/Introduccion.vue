<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-fondo-1
      .p-4.p-md-5

        p(data-aos="fade-up").mb-4 El mantenimiento adecuado de una transmisión manual es esencial para garantizar el funcionamiento óptimo del vehículo. Este proceso permite prevenir fallas, minimizar tiempos de inactividad y reducir los costos asociados con reparaciones complejas, que frecuentemente derivan de descuidos en el mantenimiento o de malos hábitos de conducción.

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las fallas en las transmisiones pueden originarse por desgaste natural, errores humanos, operaciones inadecuadas o falta de cuidado en su uso. Por ello, conocer los procedimientos adecuados para el diagnóstico y la reparación resulta fundamental para prolongar la vida útil de estos sistemas mecánicos.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            figure
              img(src="@/assets/curso/intro/2.svg", alt="alt")

          .col-lg
            p(data-aos="fade-up").mb-0 En esta actividad de aprendizaje, se busca proporcionar los conocimientos básicos necesarios para realizar un mantenimiento efectivo de la caja de cambios manual. Esto incluye desde el diagnóstico y desmontaje hasta la limpieza, inspección, reemplazo de componentes y ensamblaje final. 
      
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
