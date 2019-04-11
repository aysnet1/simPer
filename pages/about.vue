<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        المحاكاة في الايقاظ العلمي
      </h1>
      <h2 class="subtitle">
        Simulator Intractive Prime School Tunisia
      </h2>
      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المخبر</nuxt-link>

      </div>
      <div dir="rtl" class="ui raised very padded text container segment">
  <h2 class="ui header">تقنيات المحاكاة</h2>
  <p> نسعى لتوفير مجموعة واسعة من تقنيات المحاكاة لتحسين طريقة التدريس وتعلم المواد العلمية مثل :الايقاظ العلمي=> الفيزياء والكيمياء والأحياء وعلوم الأراض .
     </p>
    <p><dfn>
      تقنيات المحاكاة  هي عبارة عن أدوات تفاعلية تمكن المتعلم من الربط بين الظواهر في الحياة الواقعية والعلوم التي تفسر هذه الظواهر
    </dfn></p>
    <h1>أعضاء البحث</h1>
     <h3>
الأستاذ المشرف : السيد عمر دردور
</h3>
     <h3>
الطالب: ماهر الاحمر
</h3>
     <h3>
الطالب أيسر جبيلي
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
