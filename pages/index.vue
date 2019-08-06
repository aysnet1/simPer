<template>
  <section class="fns colorgr container">
    <div>

      <app-logo/>

      <h2>
        {{$t('home.ta')}}
      </h2>
      <h2 class="subtitle">
       {{$t('home.tb')}}
      </h2>
      <p>{{$t('home.tc')}}</p>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> {{$t('page.labo')}}</nuxt-link>

      </div>

      <div dir="rtl" class="ui raised very padded text container segment">
    <h2 class="ui header">{{$t('home.description.title')}}</h2>
  <span v-html="body"></span>

    </div>

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  },
  data  () {
     return {
       body : this.$t('home.description.body')
     }
   }
}
</script>

<style>
.colorgr{
  background-image: linear-gradient(to bottom, #67f9d3, #7ffbed, #a3fafd, #c8faff, #e9f9ff, #f3faff, #fafcff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);
}
</style>
