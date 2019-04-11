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

      <div dir="rtl" class="ui raised very padded text container segment">
  <h2 class="ui header">تقنيات المحاكاة</h2>
    <div class="image">

<img    src="~/assets/soon.jpg"/>
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
