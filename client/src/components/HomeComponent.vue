<template>
  <div class="hello">
  </div>
</template>

<script>
import VideoService from '../services/VideoService';

export default {
  name: 'HomeComponent',
  data(){
    return{
      videos:[],
      error: ''
    }
  },
  async created(){
    try {
      this.videos = await VideoService.getVideos();
      console.log(this.videos);
    } catch (err) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
