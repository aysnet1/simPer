<template>
  <div dir="ltr" style="margin:33px">
    <div class="ui top  inverted five item labeled icon sidebar menu visible " style="height: 70px !important ;   border-bottom: 1px solid #dbdfe1 !important;background: #ffffff !important; " >
      <router-link class="item " to="/">
      <i class="home icon"></i>
      الرّئيسية
    </router-link>
    <router-link class="item" to="/labo">
      <i class="flask icon"></i>
    المختبر
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

  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style >
.item {
  min-width:4.3em  !important;
  color:#1a1d1ccf !important;
}
.bb{
  visibility: visible !important;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)


}
</style>
