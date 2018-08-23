<template>
  <div id="mainbase">
    <div class="columns">
      <div id="colorblock1" class="marginat">
        <div id="logopjosep">
          <div class="jlogo">
            <img src="~/assets/img/logojosep.svg" id="logo">
          </div>
        </div>
      </div>
      <div id="colorblock2" class="marginat">
        <div class="presentacio">{{ $t('presentacio') }}</div>
      </div>
      <div id="colorblock6" class="marginat" >
        <div id="installproject">
          <div id="textinstall">
            <div class="text2">{{$t('source')}}</div>
          </div>
          <div class="logoimg">
            <img src="~/assets/img/npm.svg" id="npm" @click="openURL('https://npmjs.com/~josep')">
            <img src="~/assets/img/git.svg" id="git" @click="openURL('https://github.com/warlock')">
          </div>
        </div>
      </div>
      <div id="colorblock3" class="marginat">
        <div class="contact" v-if="lang">
          <img src="~/assets/img/en.svg" v-if="$i18n.locale === 'en'" class="contacticons" @click="changelang()">
          <img src="~/assets/img/es.svg" v-if="$i18n.locale === 'es'" class="contacticons" @click="changelang()">
          <img src="~/assets/img/ca.svg" v-if="$i18n.locale === 'ca'" class="contacticons" @click="changelang()">
          <img src="~/assets/img/ru.svg" v-if="$i18n.locale === 'ru'" class="contacticons" @click="changelang()">
          <img src="~/assets/img/gist.svg" class="contacticons" @click="openURL('https://gist.github.com/warlock')">
          <img src="~/assets/img/twitter.svg" class="contacticons" @click="openURL('https://twitter.com/hexley')">
          <img src="~/assets/img/facebook.svg" class="contacticons"  @click="openURL('https://www.facebook.com/iocoder')">
          <img src="~/assets/img/letter.svg" class="contacticons" @click="mail">
        </div>
        <div class="contact" v-else>
          <img src="~/assets/img/en.svg" class="contacticons" @click="switchlang('en')">
          <img src="~/assets/img/ca.svg" class="contacticons" @click="switchlang('ca')">
          <img src="~/assets/img/es.svg" class="contacticons" @click="switchlang('es')">
          <img src="~/assets/img/ru.svg" class="contacticons" @click="switchlang('ru')">
          <img src="~/assets/img/letter.svg" class="contacticons" @click="mail()">
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="colorblock marginat">
        <div class="projects"  @click="openURL('http://spellbook.js.gl')">
          <div class="logoproject1"><img src="~/assets/img/spellbookwhite.svg" id="spellbook"></div>
          <div class="text2">{{ $t('spellbook') }}</div>
        </div>
      </div> 
      <div class="colorblock marginat"> 
        <div class="projects" @click="openURL('https://snc.js.gl')">  
          <div class="logoproject2"><img src="~/assets/img/snc.svg" id="snc"></div>
          <div class="text3">{{ $t('snc') }}</div>
        </div>
      </div>
      <div class="colorblock marginat"> 
        <div class="projects" @click="openURL('https://rxapi.js.gl')">   
          <div class="logoproject2"><img src="~/assets/img/rxapi.svg" id="rx"></div>
          <div class="text3">{{ $t('rxapi') }}</div>
        </div>
      </div>
      <div class="colorblock marginat">   
        <div class="projects" @click="openURL('https://nexo.js.gl')">     
          <div class="logoproject2"><img src="~/assets/img/nexo.svg" id="nexo"></div>
          <div class="text3">{{ $t('nexo') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    switchlang (lang) {
      this.$i18n.locale = lang
      this.$router.push(`/${lang}`)
    },
    changelang () {
      this.lang = false
    },
    openURL (url) {
      window.open(url, '_blank')
    },
    mail () {
      window.open('mailto:js@js.gl', 'emailWindow')
    }
  },
  data () {
    return {
      lang: true
    }
  }
}
</script>

<style>
#mainbase {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content:space-around;
  flex-wrap: wrap;
}

.columns {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marginat {
  margin-top: 10px;
  margin-bottom: 10px;
}

#colorblock1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 30%;
  background-color: #3D8884;
  box-shadow: 5px 6px 45px -6px rgba(150,111,150,1);
  order: 1;
}

#logojosep {
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
}

.jlogo{
  display: flex;
  flex-direction:column;
  align-items: center; 
  justify-content: center;
}

#logo {
  width: 401.44px;
  height: 109.5px;
}

#colorblock2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  background-color: #67AF94;
  box-shadow: 5px 6px 45px -6px rgba(150,111,150,1);
  order: 2;
}

#colorblock3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100px;
  background-color: #3D8884;
  box-shadow: 5px 6px 45px -6px rgba(150,111,150,1);
  order: 3;
  justify-content: center;
}

.contact {
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  width: 90%
}

#letter {
  width: 12.5%;
}
            
#twitter, #facebook, #insta {
  width: 11%;
}

.langs {
  width: 14%;
}

.contacticons {
  width: 51.31px;
  height: 40.77px;
}

#colorblock6 {
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-around;
  width: 90%;
  height: 200px;
  background-color: #67AF94;
  box-shadow: 5px 6px 45px -6px rgba(150,111,150,1);
  order: 3;
}

#installproject {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content:space-around;
  margin: 7px;
}

#textinstall {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logoimg {
  display: flex;
  flex-direction:row;
  align-items: center; 
  justify-content: space-around;  
  width: 90%         
}

#npm {
  width: 130.49px;
  height: 53.6px;
}

#git {
  width: 58.71px;
  height: 57.61px;
}

.text2 {
  color:  white;
  font-family: 'bold';
  font-size: 1em;
  text-align: center;
}

.colorblock {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: #67AF94;
  box-shadow: 5px 6px 45px -6px rgba(150,111,150,1);
  padding: 0.5em;
}

.projects {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
}

.logoproject1 {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.text3 {
  color: white;
  font-family: 'medium';
  font-size: 1em; 
}

.logoproject2{
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

#nexo, #rx, #snc {
  width: 119.83px;
  height: 95.5px;
}

#spellbook {
  width: 70%;
}

@media (max-width: 1024px) {
  #main {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #colorblock2 {
   order: 3;
  }

  #colorblock3 {
    order: 2;
  }

  #colorblock6 {
    order: 3;
  }

  .presentacio{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content:space-around;
    color:  white;
    padding: 40px;
    font-family: 'bold';
    font-size: 1em;
  }

  .text2 {
    color: white;
    font-family: 'medium';
    font-size: 1em; 
  }

  .columns {
    width: 100%;
  }
}

@media (min-width: 1025px) {
  #main {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  #colorblock2 {
    order: 2;
  }

  #colorblock6 {
    order: 3;
  }

  #colorblock3 {
    order: 4;
  }

  .colorblock {
    height: 100%;
  }

  .presentacio {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content:space-around;
    color:  white;
    padding: 40px;
    font-family: 'bold';
    font-size: 1em;
  }

  .text2 {
    color: white;
    font-family: 'medium';
    font-size: 1em; 
  }

  .columns {
    width: 50%;
  }
}

</style>