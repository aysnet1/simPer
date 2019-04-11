<template>
  <section class="container">
    <div>
      <app-logo/>
      <h2 >
        المحاكاة في الايقاظ العلمي
      </h2>
      <h2 class="subtitle1">
  Simulator Interactive Prime School
      </h2>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المخبر</nuxt-link>

      </div>


    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
 
</style>
