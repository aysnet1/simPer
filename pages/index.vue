<template>
  <section class="fns colorgr container">
    <div>

      <app-logo/>

      <h2>
        مختبر العلوم للمدرسة التونسية
      </h2>
      <h2 class="subtitle">
Tunisina Simulator Interactive
      </h2>
      <p>مشروع ختم الاجازة التطبيقة في التربية والتعليم</p>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المخبر</nuxt-link>

      </div>

      <div dir="rtl" class="ui raised very padded text container segment">
    <h2 class="ui header">تقنيات المحاكاة</h2>
    <p> نسعى لتوفير مجموعة واسعة من تقنيات المحاكاة لتحسين طريقة التدريس وتعلم المواد العلمية مثل :الايقاظ العلمي => الفيزياء والكيمياء والأحياء وعلوم الأراض .
     </p>
    <p>
      تقنيات المحاكاة  هي عبارة عن أدوات تفاعلية تمكن المتعلم من الربط بين الظواهر في الحياة الواقعية والعلوم التي تفسر هذه الظواهر
     </p>

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
.colorgr{
  background-image: linear-gradient(to bottom, #67f9d3, #7ffbed, #a3fafd, #c8faff, #e9f9ff, #f3faff, #fafcff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);
}
</style>
