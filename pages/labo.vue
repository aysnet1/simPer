<template >
<div dir="rtl" id="" style="margin:33px">

  <div class="ui special  cards">
 <div v-for="sim in sims " :key="sim.id" class=" card" >

       <div class="image">
         <div class="ui placeholder">
        <div style="background:#0ace58" class="ui top left attached label">SimTn</div>
        <div  class="ui dimmer placeholder transition">
          <div class="content">
            <div class="center">

            </div>
          </div>
        </div>
        <div>
            <no-ssr>
          <nuxt-link :to="sim.link" style="text-decoration: none;"><img :src="'/'+sim.img" alt="" style="border: none;" width="300" height="200" />
            <div style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px; background-color: #FFF; opacity: 0.6; filter: alpha(opacity = 60);"></div>
            <table style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px;">
              <tr>
                <td style="text-align: center; color: #000; font-size: 24px; font-family: Arial,sans-serif;">اضغط هنا</td>
              </tr>
            </table>
          </nuxt-link>
        </no-ssr>
        </div>
      </div>
      </div>

      <div class="content">
        <a class="header">{{sim.title}}</a>
        <div class="meta">
          <span class="date">
            {{sim.date}}
          </span>
        </div>
        <span>
 {{sim.desc}}

        </span>
      </div>
      <div class="extra content">
        <span>
          <i class="flask icon"></i>
          1 تجارب
        </span>
        By
        <nuxt-link class="by-link" to="/about">
        {{sim.by}}
        </nuxt-link>
      </div>
    </div>

    </div>
  </div>

</template>


<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
data  () {
    return {

 sims: [
        { id:0, title:"امتصاص النبتة للماء",by:"SimTunisina",date:"24 أفريل 2019",img:"0.png",link:"/peau",desc:"راجع الكتاب المدرسي سنة خامسة صفحة 148" },
        { id:1, title:"أهمية الجذور بالنسبة لنبة",by:"SimTunisina",date:"24 أفريل 2019",img:"1.png",link:"/pltmort",desc:"موت النبة بدون جذور..." },
        { id:2, title:"دور الساق في عملية الامتصاص",by:"SimTunisina",date:"24 أفريل 2019",img:"2.png" ,link:"/pcolor",desc:"تغير لون الازهار نتيجة الماء الملون"},
        { id:3, title:"تبخر الماء",by:"SimTunisina",date:"24 أفريل 2019",img:"3.png",link:"/pltva",desc:"تبخر الماء عن طريق الاوراق.." },
        { id:4, title:"الدارة العكهربئية",by:"SimTunisina",date:"24 أفريل 2019",img:"circuit.png",link:"/circuit",desc:"بناء الدارة الكهربئية " },
        { id:5, title:"أشكال الطاقة",by:"SimTunisina",date:"24 أفريل 2019",img:"6fors.png",link:"/forse",desc:"تحول الطاقة من حالة الى اخرى" },

      ]
}
}
}
</script>

<style>
.by-link {
  color: #13ab5e !important;
}
</style>
