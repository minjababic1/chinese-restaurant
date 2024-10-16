<template>
  <header>
    <div class="container_12">
      <div class="row">
        <div class="grid_12">
          <h1>
            <router-link to="/"><img src="@/assets/images/logo.png" alt="Son Ha - Vietnamese Cuisine"></router-link>
          </h1>
          <div class="language-switcher" v-if="isLanguageSwitcherVisible">
            <button @click="setLanguage('en')" :class="{ active: $i18n.locale === 'en' }">English</button>
            <span style="color: brown; font-size: 20px">/</span>
            <button @click="setLanguage('sr')" :class="{ active: $i18n.locale === 'sr' }">Srpski</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="grid_12">
          <nav>
            <ul class="sf-menu">
              <li><router-link to="/" active-class="active-link" exact>{{ $t('header.menu.home') }}</router-link></li>
              <li><router-link to="/gallery" active-class="active-link">{{ $t('header.menu.gallery') }}</router-link></li>
              <li><router-link to="/menu" active-class="active-link">{{ $t('header.menu.menu') }}</router-link></li>
              <li><router-link to="/account" active-class="active-link">{{ $t('header.menu.account') }}</router-link></li>
              <li><router-link to="/about" active-class="active-link">{{ $t('header.menu.about') }}</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isLanguageSwitcherVisible: true
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() { // Ispravka: Koristimo beforeUnmount umesto beforeDestroy
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    },
    handleResize() {
      this.isLanguageSwitcherVisible = window.innerWidth > 768;
    }
  }
};
</script>

<style scoped>
.language-switcher {
   position: absolute;
  top: 80%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  gap: 10px;;
}

.language-switcher button {
  background-color: transparent;
  border: none;
  color: brown;
  font-weight: lighter;
  font-size: 15px;
  cursor: pointer;
  text-transform: uppercase;
}

.language-switcher button.active {
  text-decoration: underline;
}

.language-switcher button:hover {
  color: #453434;
  font-size: 16px;
}

.sf-menu .active-link {
  color: #d41515;
}

@media screen and (max-width: 2000) {
  .language-switcher {
    display: none;
  }
}
</style>
