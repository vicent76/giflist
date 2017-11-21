import { Component } from '@angular/core';
import { IonicPage, ModalController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { DataProvider } from '../../providers/data/data';
import { RedditProvider } from '../../providers/reddit/reddit';
import { FormControl } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subredditValue: string;
  subredditControl: FormControl;

  constructor(public dataService: DataProvider, public redditService:
  RedditProvider, public modalCtrl: ModalController, public platform:
  Platform, public keyboard: Keyboard, public iab: InAppBrowser) {

    this.subredditControl = new FormControl();

  }

  ionViewDidLoad(){

    this.subredditControl.valueChanges.debounceTime(1500)
    .distinctUntilChanged().subscribe(subreddit => {
      if (subreddit != '' && subreddit) {

        this.redditService.subreddit = subreddit;
        this.changeSubreddit();
        this.keyboard.close();
      }
    });

    this.platform.ready().then(() => {
    this.loadSettings();
    });
  }

  loadSettings(): void {
    
    this.redditService.fetchData();
  }
    showComments(post): void {
      let browser = this.iab.create('http://reddit.com' + post.data.permalink, '_system');
    }
    openSettings(): void {
    console.log("TODO: Implement openSettings()");
    }
    playVideo(e, post): void {

      //Create a reference to the video
      let video = e.target;

      if (!post.alreadyLoaded) {
        post.showLoader = true;
      }
      //Toggle the video playing

      if (video.paused) {
        //show the loader gif
        video.play();

        //Once the video starts playing, remove the loader gif
        video.addEventListener("playing", (e) =>{
          post.showLoader = false;
          post.alreadyLoaded = true;
        });
      }else {
        video.pause();
      }
    }

    changeSubreddit(): void {
      this.redditService.resetPost();
    }

    loadMore(): void {
      this.redditService.nextPage();
    }

}
