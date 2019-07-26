<template>
  <div class="container">
    <article v-if="post">
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.link}}</p>
    </article>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        link: this.$route.params.id,
        posts: [
               { id:"1", title:"امتصاص النبتة للماء",by:"SimTunisina",date:"24 أفريل 2019",img:"0.png",link:"peau",desc:"راجع الكتاب المدرسي سنة خامسة صفحة 148" },
               { id:"1", title:"أهمية الجذور بالنسبة لنبة",by:"SimTunisina",date:"24 أفريل 2019",img:"1.png",link:"pltmort",desc:"موت النبة بدون جذور..." },
               { id:"2", title:"دور الساق في عملية الامتصاص",by:"SimTunisina",date:"24 أفريل 2019",img:"2.png" ,link:"pcolor",desc:"تغير لون الازهار نتيجة الماء الملون"},
               { id:"3", title:"تبخر الماء",by:"SimTunisina",date:"24 أفريل 2019",img:"3.png",link:"/pltva",desc:"تبخر الماء عن طريق الاوراق.." },
               { id:"4", title:"الدارة العكهربئية",by:"SimTunisina",date:"24 أفريل 2019",img:"circuit.png",link:"circuit",desc:"بناء الدارة الكهربئية " },
               { id:"5", title:"أشكال الطاقة",by:"SimTunisina",date:"24 أفريل 2019",img:"6fors.png",link:"forse",desc:"تحول الطاقة من حالة الى اخرى" },

             ]
      }
    },
    computed: {
      post () {
        return this.posts.find(post => post.link === this.link)
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
</style>
