<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.tarjeta.bg-color-sintesis.p-4.p-lg-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta el mantenimiento de una transmisión manual, destacando su propósito de prevenir fallas, reducir costos e inactividad.  El diagnóstico previo, que incluye evitar desmontajes innecesarios e identificar la transmisión con un manual o etiqueta; el desacople de la transmisión, que requiere el uso de gatos y herramientas adecuadas, además de procedimientos como drenar aceite, desconectar cables y deslizar la transmisión; el desarmado y limpieza, siguiendo el manual de servicio, limpiando componentes y revisando el desgaste; y, finalmente, el reemplazo de piezas dañadas como engranajes, anillos y sellos. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
