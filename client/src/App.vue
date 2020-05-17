<template>
  <div id="app">
    <HomeComponent/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style lang="scss">

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app {
  font-family: brandon_reg;
  color: #393E3C;
  font-size: 1.3rem;
}


@font-face {
  font-family: 'brandon_bold';
  src: url(./assets/fonts/BRANDON_BLD.otf);
}
@font-face {
  font-family: 'brandon_blk';
  src: url(./assets/fonts/BRANDON_BLK.otf);
}
@font-face {
  font-family: 'brandon_light';
  src: url(./assets/fonts/BRANDON_LIGHT.otf);
}
@font-face {
  font-family: 'brandon_med';
  src: url(./assets/fonts/BRANDON_MED.otf);
}
@font-face {
  font-family: 'brandon_reg';
  src: url(./assets/fonts/BRANDON_REG.otf);
}

.row{
  margin: 0px;
}


</style>
