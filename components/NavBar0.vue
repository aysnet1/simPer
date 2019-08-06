<template>
  <div>
    <div class="ui top inverted six item labeled icon sidebar menu visible " style="height: 70px !important ;   border-bottom: 1px solid #dbdfe1 !important;background: #ffffff !important; " >
      <router-link class="item " :to="localePath('index')">
      <i class="home icon"></i>
      {{$t('page.home')}}
    </router-link>
    <router-link class="item" :to="localePath('labo')">
      <i class="flask icon"></i>

    {{$t('page.labo')}}
    </router-link>
    <router-link class="item" :to="localePath('blog')">
     <i class="newspaper  icon"></i>
       {{$t('page.blog')}}
         </router-link>

    <router-link class="item" :to="localePath('about')">
 <i class="envelope icon"></i>
 {{$t('page.about')}}
   </router-link>
   <router-link class="item" :to="localePath('test')">
    <i class="pencil alternate icon"></i>
      {{$t('page.ex')}}
        </router-link>


        <router-link class="item" :to="localePath('help')">
         <i class="help icon"></i>
           {{$t('page.help')}}
             </router-link>
    </div>
<SwitchLang></SwitchLang>

  </div>
</template>
<script>
import SwitchLang from '~/components/SwitchLang.vue'
export default {
  components: {
    SwitchLang
  },


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
