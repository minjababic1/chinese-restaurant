<template>
  <div class="banner-container">
    <a v-for="banner in banners" :key="banner.url" :href="banner.url" target="_blank">
      <img :src="require(`@/assets/images/${banner.image}`)" :alt="banner.alt" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  data() {
    return {
      banners: [
        { url: '#', image: 'bannerx1.jpg', alt: 'Chow House' },
        { url: '#', image: 'bannerx2.jpg', alt: 'Fuku' },
        { url: '#', image: 'bannerx3.jpg', alt: 'Four Seasons' },
        { url: '#', image: 'bannerx4.jpg', alt: 'Hutong' }
      ]
    };
  },
};
</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center; /* Centriranje banera */
  align-items: center;
  margin: 20px 0;
  gap: 10px; /* Razmak između banera */
}

.banner-container a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-container img {
  width: 100px;
  height: 100px; /* Fiksna visina za banere */
  object-fit: contain; /* Održava proporcije slike unutar zadanih dimenzija */
}
</style>