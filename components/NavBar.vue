<template>
  <div dir="ltr" id="">
    <div class="ui top demo inverted nine item labeled icon sidebar menu push visible" style="">
      <router-link class="item" to="/">
      <i class="home icon"></i>
      الرّئيسية
    </router-link>
    <router-link class="item" to="/labo">
      <i class="flask icon"></i>
    المخبر
    </router-link>

    <router-link class="item" to="about">
 <i class="envelope icon"></i>
من نحن   </router-link>
   <router-link class="item" to="work">
    <i class="pencil alternate icon"></i>
      تمارين
        </router-link>



      <router-link class="item" to="help">
  <i class="blind icon"></i>
  مساعدة
      </router-link>
    </div>
      <div class="ui divider"></div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
