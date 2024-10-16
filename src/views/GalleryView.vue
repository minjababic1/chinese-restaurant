<template>
  <div class="gallery">
    <BreadcrumbsComponent :crumbs="breadcrumbs" />
    <section class="content">

      <div class="container_12">
        <div class="row">
          <div class="grid_12">
            <h2><span>{{ $t('gallery.videos')}}</span></h2>
          </div>
          <div class="clearfix block-2">
            <div v-for="video in videos" :key="video.name" class="grid_6 video-container" >
              <iframe :src="video.src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="video-iframe" allowfullscreen></iframe>
              <p class="title-2 video-title" style="font-weight:bold">{{ video.title }}</p>
              <div>{{ video.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_12">
        <div class="row">
          <div class="grid_12">
            <h2><span>{{ $t('gallery.photos')}}</span></h2>
          </div>
          <div class="clearfix block-2">
            <div v-for="image in images" :key="image.name" class="grid_3 image-container">
              <img :src="require(`@/assets/images/${image.src}`)" alt="" class="wrapper image-img">
            </div>
          </div>
        </div>
      </div>

      <div class="container_12">
        <div class="row">
          <div class="grid_12 text-center">
            <h2><span>{{ $t('gallery.partners') }}</span></h2>
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
  name: 'GalleryVue',
  components: {
    BreadcrumbsComponent,
    BannerComponent
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' },
        { text: 'Gallery' } // Primer breadcrumbs za trenutnu stranicu
      ],
      videos: [
        {
          name: 'video1',
          src: 'https://www.youtube.com/embed/UkNdqnAVDKE'
        },
        {
          name: 'video2',
          src: 'https://www.youtube.com/embed/fVtMguFWHXs'
        },
        {
          name: 'video1',
          src: 'https://www.youtube.com/embed/BOn1SD6noCw'
        },
        {
          name: 'video2',
          src: 'https://www.youtube.com/embed/AT6PF5FNHfg'
        }
        // Dodajte još videa ovde
      ],

      images: [
        {
          name: 'image1',
          src: 'r1.jpg',
          title: 'Slika 1'
        },
        {
          name: 'image2',
          src: 'r2.jpg',
          title: 'Slika 2'
        },
        {
          name: 'image1',
          src: 'r3.jpg',
          title: 'Slika 1'
        },
        {
          name: 'image2',
          src: 'r4.jpg',
          title: 'Slika 2'
        },
        {
          name: 'image1',
          src: 'r13.jpg',
          title: 'Slika 1'
        },
        {
          name: 'image2',
          src: 'r6.jpg',
          title: 'Slika 2'
        },
        {
          name: 'image1',
          src: 'r14.jpg',
          title: 'Slika 1'
        },
        {
          name: 'image2',
          src: 'r8.jpg',
          title: 'Slika 2'
        },
        {
          name: 'image1',
          src: 'r15.jpg',
          title: 'Slika 1'
        },
        {
          name: 'image2',
          src: 'r10.jpg',
          title: 'Slika 2'
        },
        {
          name: 'image1',
          src: 'r16.jpg',
          title: 'Slika 1'
        },
        {
          name: 'image2',
          src: 'r12.jpg',
          title: 'Slika 2'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/animation.css');
@import url('../assets/css/contacts.css');
@import url('../assets/css/ie.css');
@import url('../assets/css/index.css');
@import url('../assets/css/reset.css');
@import url('../assets/css/skeleton.css');
@import url('../assets/css/style.css');
@import url('../assets/css/superfish.css');
@import url('../assets/css/touchTouch.css');

.gallery {
  padding: 20px;
}

.video-gallery, .image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.video-container, .image-container {
  flex: 1 1 calc(50% - 20px); /* Flexbox to allow 2 items per row */
  box-sizing: border-box;
}

.image-container img {
  width: 100%;
  height: 300px;
}

.video-title, .image-title {
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.image-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.video-iframe {
  width: 100%;
  height: 300px; /* Set height to 400px */
}
</style>