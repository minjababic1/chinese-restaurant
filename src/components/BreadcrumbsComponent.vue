<template>
  <nav aria-label="breadcrumb" class="breadcrumbs">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item">
        <router-link v-if="index < crumbs.length - 1" :to="crumb.link">{{ crumb.text }}</router-link>
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbsComponent',
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.breadcrumbs {
  padding: 10px 0;
  font-size: 1.25em; /* Povećava veličinu fonta */
  font-weight: bold; /* Pojačava font */
  font-family: 'Arial', sans-serif; /* Možete promeniti font-family po želji */
  color: #FF8456;
  border-radius: 5px; /* Dodaje zaobljene ivice */
  text-align: left; /* Poravnanje teksta na levo */
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  padding: 10;
  margin: 10;
}

.breadcrumb-item {
  margin-right: 10px;
}

.breadcrumb-item::after {
  content: '>';
  margin-left: 10px;
}

.breadcrumb-item:last-child::after {
  content: '';
}

.breadcrumb-item a {
  color: #FF8456; /* Plava boja za linkove */
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline; /* Podvlači tekst na hover */
}

.breadcrumb-item span {
  color: #6c757d; /* Siva boja za poslednji element */
}
</style>