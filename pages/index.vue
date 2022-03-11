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
      <p></p>
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
   },
   head() {
     return {
       title: "Tunisina.tn : simulation interactive ",
       meta: [{
           name: 'description',
           hid: 'description',
           content: this.$t('home.description.body') + 'تونيزينا'
         },
         // Open Graph
         {
           name: 'og:title',
           content: "Tunisina.tn : simulation interactive "
         },
         {
           name: 'og:description',
           content: this.$t('home.description.body')
         },
         {
           name: 'og:type',
           content: 'website'
         },
         {
           name: 'og:site_name',
           content: 'مختبر تزنيزينا'
         },
         {
           name: 'og:url',
           content: 'https://tunisina.tn'
         },
         {
           name: 'og:image',
           content: 'https://tunisnina.tn/sim-large.png'
         },
         // Twitter Card
         {
           name: 'twitter:card',
           content: 'summary'
         },
         {
           name: 'twitter:site',
           content: '@tunisina_tn'
         },
         {
           name: 'twitter:title',
           content: "Tunisina.tn : simulation interactive"
         },
         {
           name: 'twitter:description',
           content: this.$t('home.description.body')
         },
         {
           name: 'twitter:image',
           content: 'https://tunisnina.tn/sim-large.png'
         },
         {
           name: 'twitter:image:alt',
           content: 'Tunisna logo'
         }
       ]
     }
   }
}
</script>

<style>
.colorgr{
  background-image: linear-gradient(to bottom, #67f9d3, #7ffbed, #a3fafd, #c8faff, #e9f9ff, #f3faff, #fafcff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);
}
</style>
