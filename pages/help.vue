<template>
<section class="fns container">
  <div v-if="ips">
    <div class="links" >
      <nuxt-link class="button--green" to="/labo"> {{ips.title}}</nuxt-link>

    </div>

    <div  class="ui raised very padded text container segment" v-html="ips.content">
      <h2 class="ui header">المساعدة</h2>
    <div  class="ui content" >

        {{ips.content}}



    </div>

    </div>


  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  data  () {
     return {
     }},
  async asyncData({ $axios }) {
    const ips = await $axios.$get('https://www.googleapis.com/blogger/v3/blogs/8851049595699828283/posts/3045818150016313873?key=AIzaSyCjt2vZNDCqRj-JARdZjIPjiiaoKo3f_Rw')
    return { ips }
  }
}
</script>

<style>
p {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
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
