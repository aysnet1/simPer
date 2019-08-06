<template>
  <div class="btn-l">
    <div class="ui floating dropdown button mini">
      <div class="text">{{$t('lang')}}</div>
      <i class="world icon"></i>
      <div class="menu">
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
