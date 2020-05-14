<template>
  <div fluid class="container-wrapper">
    <mdb-navbar class="cw-navbar">
      <mdb-navbar-brand>
        Welcome, <span>{{name}}</span>
      </mdb-navbar-brand>
    </mdb-navbar>

    <mdb-row class="cw-header">
      <mdb-col>
        <img src="../assets/svg/24g_logo.svg" alt="24g logo"/> 
        <h4>video player</h4>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-title">
      <mdb-col>
          <h3>{{videos[0].title}}</h3>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-grid">
      <!-- main grid -->
      <mdb-col md="9" class=" mb-3 main-grid">
        <video class="video-fluid z-depth-1 mb-2" autoplay loop controls>
          <source v-bind:src="videos[1].video" type="video/mp4" />
        </video>

        <span class="font-weight-bold">{{videos[0].views}} views </span>
        <span>
          <img src="../assets/svg/thumbs_up.svg" alt="like"/><span class="pl-1 mr-4">35</span>
          <img src="../assets/svg/thumbs_down.svg" alt="dislike"/><span class="pl-1"> 4</span>
        </span>
      </mdb-col>
      <!-- small grids -->
      <mdb-col md="3" class="small-grids">
        <mdb-card class="mb-4" v-for="video in videos" :key="video._id">
          <mdb-card-image class="card-image" v-bind:src="video.thumb" v-bind:alt="video.title" v-bind:title="video.title"></mdb-card-image>
        </mdb-card>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-comment">
      <mdb-col>
          <h5 class="py-3">Comments</h5>
           <form class="comment-form">
              <textarea type="text" id="post" name="post" class="form-control" placeholder="Type a sweet comment" rows="2"></textarea>

              <div class="text-right mt-2">
                  <button class="btn" type="submit">add comment<i class="far fa-paper-plane ml-2"></i></button>
              </div>
               <!-- <div>
                  <button class="btn" type="submit">add comment<i class="far fa-paper-plane ml-2"></i></button>
              </div> -->
          </form>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-comment cw-vid-comments mt-2">
      <mdb-col class="col-9" >
        <p class="mr-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"/>
        </p>
        <p>
          <span class="pr-2">Name</span> <b>5 minutes ago</b> <br/>
          <span >Content of the comment Content of the comment Content of the comment Content of the commentContent of the comment Content of the comment</span>
        </p>
      </mdb-col>

      <mdb-col class="col-9" >
        <p class="mr-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"/>
        </p>
        <p>
          <span class="pr-2">Name</span> <b>5 minutes ago</b> <br/>
          <span >Content of the comment Content of the comment Content of the comment Content of the commentContent of the comment Content of the comment</span>
        </p>
      </mdb-col>

      <mdb-col class="col-9" >
        <p class="mr-4">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"/>
        </p>
        <p>
          <span class="pr-2">Name</span> <b>5 minutes ago</b> <br/>
          <span >Content of the comment Content of the comment Content of the comment Content of the commentContent of the comment Content of the comment</span>
        </p>
      </mdb-col>

      
      
    </mdb-row>
    

    <div class="footer-copyright text-center p-4">
      <mdb-container fluid>
        <img style="width: 150px;" src="../assets/svg/powered_by_24g.svg" alt="footer image"/>
      </mdb-container>
    </div>  
  </div>

  
</template>


<script>
import VideoService from '../services/VideoService';
import {mdbContainer, mdbTextarea, mdbBtn, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand, mdbCard, mdbCardImage} from 'mdbvue';

export default {
  name: 'HomeComponent',
  components: {
    mdbContainer, mdbTextarea, mdbBtn, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand, mdbCard, mdbCardImage,
  },
  data(){
    return{
      videos:[],
      error: '',
      name: "Abdulrasheed Mustapha",
      title:'',
      views:''
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
<style lang="scss">
.container-wrapper{
  
  .cw-navbar{
    background: #009DDB;
    box-shadow: none;
    padding: .5rem 2.5rem;

    .navbar-brand{
      font-family: brandon_light;
      font-size: inherit;
      color: #EBEBEB;
      
      span{
        font-family: brandon_reg;
      }
    }
    
  }

  .cw-header{
    background: #393C3E;
    font-family: brandon_bold;
    padding: 2rem 1.5rem;
    .col{
      padding-top: 15px;
      img{
        height: 3rem;
        margin-top: -20px;
      }
      h4{
        color: #EBEBEB;
        text-transform: uppercase;
        padding-left: 20px;
        letter-spacing: 2px;
        font-family: brandon_med;
        display: inline-block;
        
      }
    }
    
  }

  .cw-vid-title{
    padding: 3rem 1.5rem 0.5rem 1.5rem;

    h3{
      font-family: brandon_med;
      color: #393C3E;
    }
  }

  .cw-vid-grid{
    padding: 0rem 1.5rem; 

    .main-grid{
     
      span:last-child{
        // display: inline-block; 
        float: right;
        clear: right;
        img{
          margin-top: -4px;

          &:hover{
            cursor: pointer;
          }
        }
        span{
          color: #E58C1B;
          font-weight: bold;
        }
      }
    }

    .small-grids{
      &:hover{
        cursor: pointer;
      }
      .card-image{
        max-height: 149.5px;
      }
    }
  }

  .cw-vid-comment{
    
    .col{
      margin-left: 2.5rem;
      padding: 0px;
      max-width: 69.7%;
      border-top: 2px solid #EBEBEB;
      h5{
        font-family: brandon_med;
        color: #393C3E;
      }
      form{
        textarea{
          resize: none;
          border-radius: 0px;
          font-family: brandon_light;
          font-size: 1.5rem;
        }

        button{
          background: #E58C1B;
          color: #EBEBEB;
          letter-spacing: 1px;
        }
      }
    }
  }

  .cw-vid-comments{
    
    .col{
      display: flex;
      font-family: brandon_light;
      border-top: none;
      
      
      p:first-child{
        img{
          height: 80px; 
          width: 80px; 
          border-radius: 50%;
        }
      }

      p:last-child{
        line-height: 1.5rem;
        b{
          color: #D1D1D1;
        }
        span:first-child{
          font-family: brandon_bold;
        }
        span:last-child{
          color: #393C3E;
          font-size: 1.1rem;
        }
      }
    }
  }
}

@media (max-width: 736px) {  
  .container-wrapper{
    .cw-header{
      
      .col{
        text-align: center;
        
        h4{
          padding-left: 0px;
          display: block;
          margin-top: 10px;
        }
      }
      
    }

    .cw-vid-grid{
      padding: 0rem 1.5rem; 

      .small-grids{
         border-top: 1px solid #DDD;
          .card{
            display: inline-block;
            width: 32%;
            margin-left:5px;
          .card-image{
            max-height: 100.5px;
          }
        }
      }
    }
  
    .cw-vid-comment{
    
      .col{
        max-width: 84%;
        border-top: none;
      }
  }
  }

}


</style>
