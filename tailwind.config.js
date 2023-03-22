/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
      
  margin:{
'150':'150px',
'270':'270px',
'240':'240px',
'100%': '100%',
'75':'75%',
'630':'630px',
'100':'100px',
'60':'60px',


  },
      height:{
        '50':'50px',
        '72':'72px',
        '304':'304px',

      },
      width:{
        '150':'150px',
        '-webkit-fill-available': '-webkit-fill-available',
        '30%':'30%',
        '80%':'80%',
        '85':'350px',
        '300':'300px',
        '600':'600px',
'510':'510px',


      },
      minWidth:{
        '100vh':'100vh',

      },
      borderRadius:{
        '30':'30px'
      },
      fontSize:{
        '18':'18px',
        '15':'15px',
        '20':'20px',
        '12':'12px',
        '13':'13px'
      },
      inset:{
'62':'250px'
      },
      backgroundColor:{
       '0,25': 'rgba(255, 255, 255, 0.205)',
       '0.35': 'rgba(255, 255, 255, 0.35)',
       '44':'rgba(35, 38, 44)',
       '0,877':'rgba(255, 255, 255, 0.877)',
       '134':'rgba(255, 255, 255, 0.03)'
      },
      borderColor:{
        '0.35':'rgba(255, 255, 255, 0.35)',
        '0,25': 'rgba(255, 255, 255, 0.205)',
        '0,527':'rgba(255, 255, 255, 0.527)',
        '47':'rgb(47,51,54)',
       'z' :'-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'
        

      },
      borderWidth:{
        'thin':'thin'
      },
      colors:{
        '231':'rgb(231, 233, 234)',
        '123':'rgb(113, 118, 123)',
        '148':'rgb(148, 148, 148)',
        '29':'rgb(29, 155, 240)',
        '#71767b' : 'rgba(113, 118, 123)',
        '#e7e9ea': 'rgba(231, 233, 234)',
        'z' :'-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))',
        '240':'rgb(29, 155, 240)'

      },
      fontFamily:{
        'twitter':' "TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif ',
        'google': '"Google Sans",arial,sans-serif'
      },
      
      
     

    },

  },
  plugins: [],
}