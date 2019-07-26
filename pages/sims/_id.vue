<template >

  <div dir="rtl" id="" v-if="sim">
    <iframe :src="sim.src"
    style="width:100%" height="600" scrolling="no" allowfullscreen></iframe>

  </div>

</template>


 <script>
import AppLogo from '~/components/AppLogo.vue'

export default {

  components: {
    AppLogo
  },
 data  () {
    return {
      link: this.$route.params.id,
    }

},
computed: {
      sim () {
        return this.$store.state.sims.all.find(sim => sim.link === this.link)
      }
    }
}
 </script>

<style>
.by-link {
  color: #13ab5e !important;
}
</style>
