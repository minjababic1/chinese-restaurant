<template>
  <footer>
    <div class="container_12">
      <div class="row">
        <div class="grid_12">
          <div class="fright">
            <ul class="list-services clearfix">
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
          <div class="fleft">
            <router-link to="/" class="logo-1"><img src="@/assets/images/logo-1.png" alt=""></router-link>
            <div class="copyright">
              &copy; <span id="copyright-year"></span> {{ $t('footer.copyright') }}  &nbsp; | &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 600px) {
  footer {
    font-size: 12px;
  }
}
</style>

<script>
export default {
  name: 'AppFooter'
}
</script>

