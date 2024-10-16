<template>
  <div class="about">
    <BreadcrumbsComponent :crumbs="breadcrumbs" />
    <section class="content">
      <div class="container_12">
        <div class="row">
          <div class="grid_8">
            <h2><span>{{ $t('about.contact_info') }}</span></h2>
            <div class="grid_inside">
              <div class="grid_5">
                <div class="map_wrapper">
                  <iframe 
                    id="map_canvas" 
                    :src="currentMapSrc" 
                    width="600" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                  </iframe>
                </div>
              </div>
              <div class="grid_3">
                <dl class="address">
                  <dt :class="{ active: currentAddress === 'address_1' }" @click="setLocation1">{{ $t('about.address_1') }}</dt>
                  <p>{{ $t('about.telephone') }} +381 6123 4567</p>
                  <p class="e-mail">{{ $t('about.email') }} <a href="mailto:mail@demolink.org" class="demo underline">wokandrollbgl@gmail.com</a></p>
                </dl>
                <dl class="address" id="address2">
                  <dt :class="{ active: currentAddress === 'address_2' }" @click="setLocation2">{{ $t('about.address_2') }}</dt>
                  <dd><p>{{ $t('about.telephone') }} +381 6123 7891</p></dd>
                  <dd><p class="e-mail">{{ $t('about.email') }} <a href="mailto:mail@demolink.org" class="demo underline">wokandrollnsl@gmail.com</a></p></dd>
                </dl>
              </div>
            </div>
          </div>
          <article class="grid_4">
            <h2 class="v2"><span>{{ $t('about.about_us') }}</span></h2>
            <p>{{ $t('about.unique') }}</p>
            <h3 style="font-weight:bold">{{ $t('about.awards') }}</h3>
            <ul>
              <li>{{ $t('about.award_1') }}</li>
              <li>{{ $t('about.award_2') }}</li>
              <li>{{ $t('about.award_3') }}</li>
            </ul>
          </article>
        </div>
      </div>

      <div class="container_12">
        <div class="row">
          <div class="grid_12 text-center">
            <h2><span>{{ $t('about.partners') }}</span></h2>
          </div>
          <div class="grid_12 text-center">
            <BannerComponent />
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import BannerComponent from '../components/BannerComponent.vue';


export default {
  name: 'AboutView',
  components: {
    BreadcrumbsComponent,
    BannerComponent
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' },
        { text: 'About' } // Primer breadcrumbs za trenutnu stranicu
      ],
      currentMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.610566236627!2d20.46489901530349!3d44.81860617909881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9b1b1b1b1%3A0xb1b1b1b1b1b1b1b1!2sBulevar+kralja+Aleksandra+30%2C+Beograd!5e0!3m2!1sen!2srs!4v1625487894567!5m2!1sen!2srs",
      currentAddress: 'address_1'
    };
  },
  methods: {
    setLocation1() {
      this.currentMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.610566236627!2d20.46489901530349!3d44.81860617909881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9b1b1b1b1%3A0xb1b1b1b1b1b1b1b1!2sBulevar+kralja+Aleksandra+30%2C+Beograd!5e0!3m2!1sen!2srs!4v1625487894567!5m2!1sen!2srs";
      this.currentAddress = 'address_1';
    },
    setLocation2() {
      this.currentMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.610566236627!2d19.84400001530349!3d45.25601787909881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1b1b1b1b1b1b%3A0xb1b1b1b1b1b1b1b1!2sZmaj+Jovina+5%2C+Novi+Sad!5e0!3m2!1sen!2srs!4v1625487894567!5m2!1sen!2srs";
      this.currentAddress = 'address_2';
    }
  }
}
</script>

<style scoped>
p{
  padding-bottom: 5px;
}

.grid_3{
  height: 312px;
}

#address2{
  margin-top:60px
}

.about {
  /* Your styles here */
  padding:20px;
}
.address dt {
  cursor: pointer;
  font-size: 1.2em;
  margin-bottom: 10px;
}
.address dt.active {
  font-weight: bold;
}
</style>
