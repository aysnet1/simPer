module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SimPsT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simulator Intractive Prime School Tunisia' },
      {name:'keywords', content: 'SimPsT, Simulator,تجارب الايقاظ العلمي ,سنة خامسة,سنة سادسة,التعليم في تونس,دروس الايقاظ العلمي سنة خامسة ,دروس الايقاظ العلمي سنة سادسة ,ابتدائية,سنة رابعة,الدرجة الثالثة,دروس,تمارين,التعليم الابتدائي,المدرسة التونسية,المخبر الافتراضي,محاكاة التجارب'},
      {name:"أيسر جبيلي و ماهر الأحمر" ,content:"أستاذ تعليم ابتدائي"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel:"stylesheet",  type:"text/css" ,href: 'https://fonts.googleapis.com/css?family=Amiri' }

],

  },
  css: [
    {src: 'seman/semantic.rtl.css'},

  ],
  /*
  ** Customize the progress bar color
  */
 loading: { color: '#3B8070' , height: '4px', rtl:true,duration:10000 },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

}
