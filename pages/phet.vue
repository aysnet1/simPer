<template>
  <section class=" fns container">
    <div>


      <div class="links">
         <nuxt-link   class="button--green" to="/labo"> المختبر</nuxt-link>

      </div>
      <div dir="rtl" class="ui raised very padded text container segment">
  <h2 class="ui header">ترخيص فات-Phet Colarado</h2>
  <div class="ui dropdown button">
  <span class="text">Choose Category</span>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">
      <span class="text">Category 1</span>
    </div>
    <div class="item">
      <i class="dropdown icon"></i>
      <span class="text">Category 2</span>
      <div class="menu">
        <div class="item">Item 2A</div>
        <div class="item">Item 2B</div>
        <div class="item">Item 2C</div>
      </div>
    </div>
    <div class="item">
      <i class="dropdown icon"></i>
      <span class="text">Category 3</span>
      <div class="menu">
        <div class="item">Item 3A</div>
        <div class="item">Item 3B</div>
        <div class="item">Item 3C</div>
      </div>
    </div>
  </div>
</div>
  <p>
    جميع برمجيات المحاكاة المتوفرة في <a href="http://phet.colorado.edu">Phet</a> هي موارد تعليمية مفتوحة متاحة بموجب ترخيص  Creative Commons Attribution CC-BY.
</p>
<p>
يُمنح الإذن لاستخدام برمجيات PhET ، أو مشاركتها ، أو إعادة توزيعها مجانًا بموجب ترخيص CC-BY.
</p>
<p>
PhET المحاكاة التفاعلية
</p>
<p>
جامعة كولورادو بولدر
</p>
<p> الموقع
<a>
https://phet.colorado.edu
</a>
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
  },
  mounted() {
    $(' .ui.dropdown')
    .dropdown({
      allowCategorySelection: true
    })

}
}
</script>

<style>


</style>
