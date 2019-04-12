<template>
  <section class="fns container">
    <div>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المخبر</nuxt-link>

      </div>

      <div dir="rtl" class="ui raised very padded text container segment">
  <h2 class="ui header">المساعدة</h2>
    <div class="image" align="center">

<img class="imh"    src="~/assets/soon.jpg"/>
    </div>

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
p{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  font-weight: 15;
  font-size: 20px;
  justify-content: rigth;
}

.subtitle1 {
  font-weight: 200;
  font-size: 15px;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 5px;
}


</style>
