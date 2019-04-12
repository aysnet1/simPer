
<template >
<div dir="rtl" id="" style="margin:33px">

  <div class="ui special cards">
    <div class="card">
      <div class="image">
        <div class="ui dimmer transition">
          <div class="content">
            <div class="center">

            </div>
          </div>
        </div>
        <div>
          <nuxt-link to="/simv" style="text-decoration: none;"><img src="~/assets/plante.png" alt="plante" style="border: none;" width="300" height="200" />
            <div style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px; background-color: #FFF; opacity: 0.6; filter: alpha(opacity = 60);"></div>
            <table style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px;">
              <tr>
                <td style="text-align: center; color: #000; font-size: 24px; font-family: Arial,sans-serif;">اضغط هنا</td>
              </tr>
            </table>
          </nuxt-link>
        </div>
      </div>
      <div class="content">
        <a class="header">النبتة</a>
        <div class="meta">
          <span class="date">
            أخر تحديث 10 أفريل 2019
          </span>
        </div>
      </div>
      <div class="extra content">
        <span>
          <i class="flask icon"></i>
          1 تجارب
        </span>
        By
        <nuxt-link class="by-link" to="/about">
          Tunisina
        </nuxt-link>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <div class="ui dimmer transition">
          <div class="content">
            <div class="center">

            </div>
          </div>
        </div>
        <div>
          <nuxt-link to="/forse" style="text-decoration: none;"><img src="~/assets/6fors.png" alt="الطاقة" style="border: none;" width="300" height="200" />
            <div style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px; background-color: #FFF; opacity: 0.6; filter: alpha(opacity = 60);"></div>
            <table style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px;">
              <tr>
                <td style="text-align: center; color: #000; font-size: 24px; font-family: Arial,sans-serif;">اضغط هنا</td>
              </tr>
            </table>
          </nuxt-link>
        </div>
      </div>
      <div class="content">
        <a class="header">تحول الطاقة </a>
        <div class="meta">
          <span class="date">

            أخر تحديث 10 أفريل 2019
          </span>
        </div>
        <span style="color:#6239dc">
          <i class="ui icon edit small"></i>
          نسخة معدلة من <strong>Tunisina</strong>
          النسخة الاصلية <a href="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html" target="_blank"><strong>
              هنا
            </strong>
          </a>

        </span>

      </div>
      <div class="extra content">
        <span>
          <i class="flask icon"></i>
          1 تجارب
        </span>
        By
        <nuxt-link class="by-link" to="/phet">
          PhET Simulations
        </nuxt-link>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <div class="ui dimmer transition">
          <div class="content">
            <div class="center">

            </div>
          </div>
        </div>
        <div>
          <nuxt-link to="/circuit" style="text-decoration: none;"><img src="~/assets/circuit.png" alt="الدارة الكهربائية" style="border: none;" width="300" height="200" />
            <div style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px; background-color: #FFF; opacity: 0.6; filter: alpha(opacity = 60);"></div>
            <table style="position: absolute; width: 200px; height: 80px; left: 50px; top: 60px;">
              <tr>
                <td style="text-align: center; color: #000; font-size: 24px; font-family: Arial,sans-serif;">اضغط هنا</td>
              </tr>
            </table>
          </nuxt-link>
        </div>
      </div>
      <div class="content">
        <a class="header">الدارة الكهربائية</a>
        <div class="meta">
          <span class="date">

            أخر تحديث 10 أفريل 2019
          </span>
        </div>
      </div>
      <div class="extra content">
        <span>
          <i class="flask icon"></i>
          1 تجارب
        </span>
        By
        <nuxt-link class="by-link" to="/phet">
          PhET Simulations
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
  }
}
</script>

<style>
.by-link {
  color: #13ab5e !important;
}
</style>
