<template>
  <div class="home">
    <BreadcrumbsComponent :crumbs="breadcrumbs" />
    <section class="content">
      <div class="container_12">
        <div class="row">
          <div class="grid_12">
            <h2><span>{{ $t('home.topDishes') }}</span></h2>
          </div>
          <div class="clearfix block-2">
            <div v-for="dish in dishes" :key="dish.name" class="grid_4 dish-container">
              <img :src="require(`@/assets/images/${dish.image}`)" alt="" class="wrapper dish-img">
              <p class="title-2 employee-name" style="font-weight:bold">{{ $t(`home.dishes.${dish.name}.title`) }}</p>
              <div> {{ $t(`home.dishes.${dish.name}.description`) }}</div>
              <div class="grade">
                <span class="rating">{{ dish.grade }}</span>/5
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_12">
        <div class="row">
          <div class="grid_12">
            <h2><span>{{ $t('home.news') }}</span></h2>
          </div>
          <div class="grid_12 block-3 clearfix">
            <div class="clearfix">
              <div class="w4">
                <img src="../assets/images/preparing-food.jpg" alt="" class="wrapper">
              </div>
              <div class="w4">
                <blockquote class="inside">
                  <span class="quote v1"></span>
                  <div class="text-2" style="font-size:17px">
                    {{ $t('home.welcomeMessage') }}
                    <ul>
                      <li><strong>{{ $t('home.monday') }}</strong></li>
                      <li><strong>{{ $t('home.wednesday') }}</strong></li>
                      <li><strong>{{ $t('home.friday') }}</strong></li>
                      <li><strong>{{ $t('home.weekendSpecial') }}</strong></li>
                    </ul>
                    {{ $t('home.dontMissOut') }}
                    <span class="quote"></span>
                  </div>
                </blockquote>
              </div>
            </div>
            <div>
              <div class="w4 block-4">
                <h3>{{ $t('home.dishOfTheDay') }}</h3>
                <div style="font-weight:bold;font-size:24px" class="title-2">{{ $t('home.dishOfTheDayName')}}</div>
                <div class="list_carousel responsive">
                  <ul id="foo" class="clearfix center-content">
                    <li>
                      <img src="../assets/images/dish_of_the_day.jpg" alt="" class="centered-image">
                    </li>
                  </ul>
                  <div class="pagination clearfix"></div>
                </div>
              </div>
              <div class="w4">
                <div class="bg-1">
                  <div class="text-4">{{ $t('home.reservation') }}</div>
                  <div>{{ $t('home.tel') }} 123-456-7890</div>
                  <a href="#" class="link-1">{{ $t('home.bookTableOnline') }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_12">
        <div class="row">
          <div class="grid_12 text-center">
            <h2><span>{{ $t('home.newEmployees') }}</span></h2>
          </div>
          <div class="clearfix">
            <div v-for="employee in employees" :key="employee.name" class="grid_3 box-1 maxheight1">
              <img :src="require(`@/assets/images/${employee.image}`)" alt="" class="wrapper">
              <p class="title-2 employee-name">{{ $t(`home.employees.${employee.name}.name`) }}</p>
              <div>{{ $t(`home.employees.${employee.name}.description`) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_12">
        <div class="row">
          <div class="grid_12 text-center">
            <h2><span>{{ $t('home.partners') }}</span></h2>
          </div>
          <div class="grid_12 text-center">
            <BannerComponent />
          </div>
        </div>
      </div>

      
    </section>
  </div>
</template>

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

.home{
  padding:20px;
}

.employee-name {
  font-weight: bold;
}

.dish-img {
  width: 290px;
  height: 200px;
  object-fit: cover;
}

.dish-container .grade {
  margin-top: 10px;
  font-size: 18px;
  color: #FF8456;
}

.dish-container .grade .rating {
  font-weight: bold;
  font-size: 24px;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.centered-image {
  width: 319px;
  height: 210px;
}
</style>

<script>

import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import BannerComponent from '../components/BannerComponent.vue';

export default {
  name: 'HomeView',
  components: {
    BreadcrumbsComponent,
    BannerComponent
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' }
        // Primer breadcrumbs za trenutnu stranicu
      ],
      employees: [
        {
          name: 'Mark Johnson',
          image: 'page-2_img-2.jpg',
          description: 'Mark Johnson is passionate about delivering authentic Chinese cuisine with a modern twist. His dedication to culinary arts shines through in every dish he creates.'
        },
        {
          name: 'Emma Grosh',
          image: 'page-2_img-3.jpg',
          description: 'Emma Grosh brings a wealth of experience in Chinese culinary traditions. Her innovative approach to flavors ensures each meal is a delightful experience.'
        },
        {
          name: 'Laura Stegner',
          image: 'page-2_img-4.jpg',
          description: 'Laura Stegner blends traditional Chinese cooking techniques with contemporary tastes, crafting dishes that are both comforting and adventurous.'
        },
        {
          name: 'Patrick Pool',
          image: 'page-2_img-5.jpg',
          description: 'Patrick Pool\'s expertise in Chinese gastronomy brings a unique flair to every dish he prepares. His commitment to quality and authenticity is unparalleled.'
        }
      ],
      dishes: [
        {
          name: 'Kung Pao Chicken',
          image: 'dish1.jpg',
          grade: '5',
          title: 'Kung Pao Chicken',
          description: 'A spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers. Known for its bold flavors and balance of sweet and savory.'
        },
        {
          name: 'Sweet and Sour Pork',
          image: 'dish2.jpg',
          grade: '4.8',
          title: 'Sweet and Sour Pork',
          description: 'A classic Chinese dish featuring tender pieces of pork coated in a tangy sweet and sour sauce, served with colorful bell peppers and pineapple.'
        },
        {
          name: 'Mapo Tofu',
          image: 'dish3.jpg',
          grade: '4.7',
          title: 'Mapo Tofu',
          description: 'A traditional Sichuan dish made with tofu set in a spicy chili and bean-based sauce, typically containing minced meat, usually pork or beef.'
        }
      ]
    }
  }
}
</script>