<template>
  <div class="w-85  h-304 ml-5 mr-80 mt-2.5 flex flex-col rounded-2xl relative border-47 border-solid border-thin">
<span  class="mb-1 mt-2 text-white font-extrabold ml-5 text-20  pl-2"> {{ twitterNew }}</span>
<span class="text-148 ml-5 text-13 inline pl-2 ">
    {{ user }}
</span>
<div class="mt-2.5 flex flex-col items-center">
    <button class="w-300 h-10  rounded-30 mb-3 flex flex-row items-center relative justify-center font-medium text-black bg-white cursor-pointer hover:bg-0,877">
        <span class="font-google mb-2"> <img class="-ml-7 mt-2 -mb-5 "  src="../components/icons/google.svg" alt=""> {{ google }}</span>
    </button>
    <button class="w-300 h-10  rounded-30 mb-3 flex flex-col items-center  relative justify-center font-bold text-black bg-white cursor-pointer hover:bg-0,877">
        <span class="font-twitter mb-2 "> <img class="-ml-7 mt-2 -mb-6 " src="../components/icons/apple.svg" alt=""> {{ apple }}</span>
    </button>
    <button class="w-300 h-10  rounded-30  flex flex-col items-center relative  justify-center font-bold text-black bg-white cursor-pointer hover:bg-0,877">
        <span class="font-twitter mt-2 mb-2 ">{{ account }}</span>
    </button>
</div>
<div class="mr-2.5 ml-5 mt-6 text-148 text-12">
    By signing up, you agree to the <span class="text-29 cursor-pointer hover:underline ">Terms of Service</span> and <span class="text-29 cursor-pointer hover:underline">Privacy Policy</span>, including <span class="text-29 cursor-pointer hover:underline">Cookie Use</span>.

    <div class="flex felx-row mt-11 text-12 cursor-pointer">
  <p>Hizmet şartları &emsp; Gizlilik Politikası  &emsp;Çerez Politiksaı  &emsp; <br> <br>
    İmprint &emsp;Erişebilirlik &emsp; Reklam Bilgisi <br> <br>  DahaFazla...  &emsp; 
© 2023 Twitter, Inc</p> 
    
  </div>
</div>

 
  
  </div>
 
</template>

<script>
export default {
name:'Makelogin',
data(){
    return{
        user:"Kişiselleştirilmiş zaman akışını almak için hemen kaydol !",
        google:"Google ile Kaydolun",
        apple:"Apple ile Kaydol",
        account:"Hesap oluştr",
        twitterNew:"Twitter'da yeni misin?"
    }
}
}
</script>

