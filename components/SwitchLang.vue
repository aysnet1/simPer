<template>
  <div class="btn-l">
    <select class="ui floating  button mini">
      <option select class="text">{{$t('lang')}}</option>
    
      <option class="menu">
        <nuxt-link class="item"
        :to="switchLocalePath(locale.code)"
        v-for="locale in $i18n.locales"
        :key="locale.code"
       >
       {{ locale.name }}</nuxt-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data: () => ({

  }),
  mounted(){
    $('.dropdown')
  .dropdown({
    action: 'hide'
  });
  }
}
</script>

<style lang="css" scoped>
.btn-l{
  position: fixed;
  right: 0;
  z-index: 200;
  top:80px
}
</style>
