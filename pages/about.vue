<template>
<section class=" fns container ">
  <div>
    <div class="links">
      <nuxt-link class="button--green" to="/labo"> المختبر</nuxt-link>
    </div>
    <div dir="rtl" class="ui raised very padded text container segment ">
      <h2 class="ui header">الفريق</h2>

          <p> نسعى لتوفير مجموعة واسعة من تقنيات المحاكاة لتحسين طريقة التدريس وتعلم المواد العلمية مثل :الايقاظ العلمي=> الفيزياء والكيمياء والأحياء وعلوم الأراض .
          </p>
          <p><dfn>
              تقنيات المحاكاة هي عبارة عن أدوات تفاعلية تمكن المتعلم من الربط بين الظواهر في الحياة الواقعية والعلوم التي تفسر هذه الظواهر
            </dfn></p>
          <h3>
            المربي أيسر جبيلي
          </h3>
          <h4> Email:aysser21@gmail.com</h4>
          <h4> tele: +216 29 652 077 </h4>

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
  head: {
      title: 'من نحن ',
      titleTemplate: '%s - tunisina',
      meta: [
        { hid: 'description', name: 'description', content: 'تونيزينا مختبر افتراضي للمدرسة الابتدائية' },
        { name: 'og:image', content: 'https://tunisina.tn/sim-large.png' },
      ]
    }
}
</script>

<style>


</style>
