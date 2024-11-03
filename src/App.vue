<template>
  <HeaderComponent/>
  <AccueilComponent/>
</template>

<script>
import HeaderComponent from './components/header.vue';
import AccueilComponent from './components/accueil.vue';

export default {
  name: 'App',
  components: {
    AccueilComponent,
    HeaderComponent,
  }
}
</script>