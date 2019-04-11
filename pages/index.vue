<template>
  <section class="container">
    <div>
      <app-logo/>
      <h2>
        المخبر الافتراضي للمدرسة الابتدائية
      </h2>
      <h2 class="subtitle">
Tunisiana Simulator Interactive
      </h2>
      <p>مشروع ختم الاجازة التطبيقة في التربية والتعليم</p>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المخبر</nuxt-link>

      </div>

      <div dir="rtl" class="ui raised very padded text container segment">
    <h2 class="ui header">تقنيات المحاكاة</h2>
    <p> نسعى لتوفير مجموعة واسعة من تقنيات المحاكاة لتحسين طريقة التدريس وتعلم المواد العلمية مثل :الايقاظ العلمي=> الفيزياء والكيمياء والأحياء وعلوم الأراض .
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
  font-weight: 150px;
  font-size: 22px;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 8px;
}

.links {
  padding-top: 15px;
}
</style>
