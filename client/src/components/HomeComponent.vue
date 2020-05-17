<template>
  <div fluid class="container-wrapper">
    <mdb-navbar class="cw-navbar">
      <div class="navbar-brand col-12" >
        <mdb-row>
          <mdb-col xs="6" class="pl-0">
            Welcome, <span>{{name}}</span>
          </mdb-col>
          <mdb-col  xs="6" class="text-right">
            <i class="far fa-user" v-on:click="systemUsers" title="change default system user"></i>
          </mdb-col>
        </mdb-row>

          <!-- system user selection -->
          <mdb-modal class="user-modal" side position="top-right" direction="right" :show="modal" @close="modal = false">
            <mdb-modal-header>
                <mdb-modal-title>System Users</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body>
              <ol class="pl-5">
                <li v-for="user in users" :key="user._id">{{user.name}}</li>
              </ol>

              <small> <span class="text-bold">NB:</span> Default user is {{name}}.<br/>Changeable from the API</small>
            </mdb-modal-body>
            <mdb-modal-footer>
                <mdb-btn outline="danger" size="sm" @click.native="modal = false">Close</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
      </div>
    </mdb-navbar>

    <mdb-row class="cw-header">
      <mdb-col>
        <img src="../assets/svg/24g_logo.svg" alt="24g logo"/> 
        <h4>video player</h4>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-title">
      <mdb-col>
          <h3 v-if="!flag">{{videos[0].title}}</h3>
          <h3 v-if="flag">{{video.title}}</h3>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-grid">
      <!-- main grid -->
      <mdb-col md="9" class=" mb-3 main-grid">
       <video v-if="!flag" class="video-fluid z-depth-1 mb-2" autoplay loop controls>
          <source  v-bind:src="videos[0].video" type="video/mp4" />
        </video>
        <p v-if="flag">
          <video class="video-fluid z-depth-1 mb-2" autoplay loop controls>
          <source  v-bind:src="video.video" type="video/mp4" />
        </video>
        </p>
        
        <span v-if="!flag" class="font-weight-bold">{{videos[0].views}} views </span>
        <span v-if="flag" class="font-weight-bold">{{video.views}} views </span>
        <span>
          <img v-on:click="likeVideo(video_id)" src="../assets/svg/thumbs_up.svg" alt="like"/>
            <span class="pl-1 mr-4">{{likes}}</span>
          <img v-on:click="dislikeVideo(video_id)" src="../assets/svg/thumbs_down.svg" alt="dislike"/>
            <span class="pl-1"> {{dislikes}}</span>
        </span>
      </mdb-col>
      
      <!-- small grids -->
      <mdb-col md="3" class="small-grids">
        <mdb-card class="mb-4" v-for="video in videos" :key="video._id" v-on:click.native="getVideoById(video._id, getComments(video._id))">
          <mdb-card-image class="card-image" v-bind:src="video.thumb" v-bind:alt="video.title" v-bind:title="video.title"></mdb-card-image>
        </mdb-card>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-comment">
      <mdb-col>
          <h5 class="py-3">Comments</h5>
           <div class="comment-form">
              <textarea type="text" id="new-comment" v-model="comment" class="form-control" placeholder="Type a sweet comment" rows="2"></textarea>

              <div class="text-right mt-2">
                  <button class="btn" type="submit" v-on:click="addComment(video_id)">add comment<i class="far fa-paper-plane ml-2"></i></button>
              </div>
               <!-- <div>
                  <button class="btn" type="submit">add comment<i class="far fa-paper-plane ml-2"></i></button>
              </div> -->
          </div>
      </mdb-col>
    </mdb-row>

    <mdb-row class="cw-vid-comment cw-vid-comments mt-2">
      <mdb-col class="col-9" v-for="comment in comments" :key="comment._id">
        <p class="mr-4">
          <img src="../assets/png/placeholder_avatar.png" alt="placeholder avatar"/>
        </p>
        <p>
          <span class="pr-2">{{comment.author.name}}</span> <b>{{comment.createdAt | comment_moment}} </b> <br/>
          <span>{{comment.content}}</span>
        </p>
      </mdb-col>

      
    </mdb-row>
    

    <div class="footer-copyright text-center p-4 mt-5">
      <mdb-container fluid>
        <img src="../assets/svg/powered_by_24g.svg" alt="footer image"/>
      </mdb-container>
    </div>  
  </div>

  
</template>


<script>
import UserService from '../services/UserService';
import VideoService from '../services/VideoService';
import CommentService from '../services/CommentService';
import SentimentService from '../services/SentimentService';
import {mdbContainer, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTextarea, mdbBtn, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand, mdbCard, mdbCardImage} from 'mdbvue';
import moment from 'moment';
export default {
  name: 'HomeComponent',
  components: {
    mdbContainer, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTextarea, mdbBtn, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand, mdbCard, mdbCardImage,
  },
  data(){
    return{
      modal: false,
      videos:[], video:[], comments:[], users:[],
      error: '',
      name: "Abdulrasheed Mustapha",
      user_id:'',
      comment:'', video_id:'',views:'',
      flag: Boolean, 
      likes: 0, dislikes:0
    }
  },
  async created(){
    try {
      this.videos = await VideoService.getVideos();
      // console.log(this.videos);
      this.video_id = this.videos[0]._id;
      this.getComments(this.video_id);
      this.getLikes(this.video_id);
      this.getDislikes(this.video_id);
      this.flag = false;
    } catch (err) {
      console.log(err);
    }
  },
  methods:{
    systemUsers: async function (){
      this.users = await UserService.getUsers();
      this.modal = true;
    },

    getVideoById: async function (id, cb){
      this.video = [];
      this.flag = false;
      try {
        this.video = await VideoService.getVideo(id);
        this.video_id = this.video._id;
        this.flag = true;
        this.getLikes(this.video_id);
        this.getDislikes(this.video_id)
        cb;
      } catch (err) {
        console.log(err);
      }
    },
    getComments: async function(id){
      try {
        this.comments = await CommentService.getComments(id);
      } catch (err) {
        console.log(err);
      }
    },
    addComment: async function(id){
      await CommentService.insertComment(this.video_id, this.comment);
      this.comments = await CommentService.getComments(id);
      this.comment = '';
    },
    getLikes: async function(id){
      try {
        this.likes = await SentimentService.getLikes(id);
      } catch (err) {
        console.log(err);
      }
    },
    getDislikes: async function(id){
      try {
        this.dislikes = await SentimentService.getDislikes(id);
      } catch (err) {
        console.log(err);
      }
    },
    likeVideo: async function(id){
      await SentimentService.likeAVideo(id);
      this.likes = await SentimentService.getLikes(id);
    },
    dislikeVideo: async function(id){
      await SentimentService.dislikeAVideo(id);
      this.dislikes = await SentimentService.getDislikes(id);
    }
  },
  filters: {
    comment_moment: function (value){
         if (value) {
            return moment(String(value)).fromNow();
          }
      },
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
      padding: 0px;

      span{
        font-family: brandon_reg;
      }
      
      i{
        cursor: pointer;
      }

      .user-modal{
        color: #393C3E;

        .modal-title{
          font-family: brandon_med;
        }
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
      div.comment-form{
        textarea{
          resize: none;
          border-radius: 0px;
          font-family: brandon_light;
          font-size: 1.5rem;
        }

        button{
          background: #E58C1B;
          color: #FFFFFF;
          letter-spacing: 1px;
          padding: 25px 55px;
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

  .footer-copyright{
    img{
      width: 150px;
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
