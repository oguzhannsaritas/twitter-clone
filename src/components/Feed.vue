<template>
  <div class="-mt-1  w-600 h-screen  ml-80   border-solid border-thin border-x-47  ">

    <div class="flex flex-row items-center pl-4 justify-between">
      <div class="w-11/12 flex flex-row">
        <div class="h-11 flex items-center justify-center cursor-pointer mt-2 rounded-tl-30 rounded-bl-30 bg-44">
          <img class=" pl-5 h-4 " src="../components/icons/twitter_search.svg" alt="" />
        </div>

        <input type="search" name="search-input" id="search-input"
          class="w-5/6  h-11 pl-4 text-15 rounded-30  mt-2 rounded-tl-none rounded-bl-none bg-44"
          placeholder="Twitter'da Ara" />
      </div>
      <div class="cursor-pointer mb-1 p-2  bg-transparent mr-2 mt-4 rounded-3xl hover:duration-200 hover:bg-0,25">
        <img class="h-4" src="../components/icons/twitter_setting.svg" alt="">
      </div>
      

    </div>

    <div class="flex flex-col  pl-3 text-white">
      <span class="flex flex-col mt-2.5 text-231 text-20 mb-2 font-extrabold font-twitter"> {{ newTitle }}</span>
    </div>
    

    <button v-for="tab in tabs" class="w-full flex justify-between hover:bg-134 pt-2 pb-2  ">
      <div class="flex flex-col pl-3 ">
        <p class="text-#71767b text-13 cursor-pointer  font-twitter flex ">{{ tab.title }} <img class="h-5 ml-96  hidden lg:block  " src="../components/icons/abaout.svg" alt=""> </p>        <p class="text-231  text-15 font-bold font-twitter  text-left">{{ tab.handle }} </p>
        <p class="text-#71767b text-13 cursor-pointer  font-twitter text-left"> {{ tab.name }}</p>
        
      </div>

    </button>
    <button class="w-full flex justify-between hover:bg-134 pt-2 pb-2 "  >
      <span class="text-240  text-15 font-twitter text-left p-px pl-4"> {{ more }} </span>

    </button>






    <div
      class=" top-3/4 mt-40 -w-webkit-fill-available left-0 h-72  flex absolute  bg-cyan-600 shadow-xl shadow-gray-400/50 ">

      <h1 class="top-2 ml-96 left-52 inline-block text-2xl relative text-white font-bold font-twitter">{{ h1 }}</h1>

      <p class="text-white font-normal  right-10 top-9 text-15 inline-block relative font-twitter">{{ twitterUser }}</p>


      <button
        class="bg-transparent text-white font-bold justify-center text-15 ml-auto  mt-4 h-9 w-24 border-solid border border-0.35  rounded-30 cursor-pointer hover:bg-0,25 hover:duration-200 font-twitter ">{{
          login }}</button>
      <button
        class="text-15 font-bold justify-center border border-solid border-0.35 ml-2.5 mr-80 mt-3 h-10 w-24 bg-white text-black font-twitter rounded-30 cursor-pointer ">{{
          register }}</button>



    </div>
  </div>
</template>

<script >
export default {
  name: "Feed",
  data() {
    return {

      tabs: [
        { title: 'Türkiye tarihinde gündemde', handle: '#ŞAMPİYON TAKIM', name: '200,1 B Tweet' },
        { title: 'Türkiye tarihinde gündemde', handle: '#FENERBAHÇE', name: '200,1 B Tweet' },
        { title: 'Türkiye tarihinde gündemde', handle: '#GALATASARAY', name: '120,1 B Tweet' },
        { title: 'Türkiye tarihinde gündemde', handle: '#BEŞİKTAŞ', name: '180,1 B Tweet' },
        { title: 'Türkiye tarihinde gündemde', handle: '#TRABZONSPOR', name: '20,1 B Tweet' },
        



      ],

      newTitle:"İlgini çekebilecek gündemler",
      h1:'Olup bitenleri kaçırma',
      twitterUser: 'İlk öğrenen Twitter kullanıcıları olacak.',
      login:'Giriş Yap',
      register:'Kaydol',
      more:'Daha Fazlası için'


    }
  }
};
</script>

