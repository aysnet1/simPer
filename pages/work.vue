<template>
  <section class="container">
    <div>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المخبر</nuxt-link>

      </div>

      <div dir="rtl" class="ui raised very padded text container segment">
  <h2 class="ui header">تمارين</h2>
    <div class="image">

<img class="imh" src="~/assets/soon.jpg"/>
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
@import url('https://fonts.googleapis.com/css?family=Amiri');
p {
  font-family: Amiri !important;
  font-size: 120%;
  line-height: 1.6em


}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}



.links {
  padding-top: 15px;
}
.imh{
  width:100%
}
</style>
