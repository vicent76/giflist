import { Component } from '@angular/core';
import { IonicPage, ModalController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { DataProvider } from '../../providers/data/data';
import { RedditProvider } from '../../providers/reddit/reddit';
import { FormControl } from '@angular/forms';
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

  constructor(public dataService: DataProvider, public redditService:
  RedditProvider, public modalCtrl: ModalController, public platform:
  Platform, public keyboard: Keyboard) {

  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
    this.loadSettings();
    });
  }

  loadSettings(): void {
    console.log("TODO: Implement loadSettings()");
    }
    showComments(post): void {
    console.log("TODO: Implement showComments()");
    }
    openSettings(): void {
    console.log("TODO: Implement openSettings()");
    }
    playVideo(e, post): void {
    console.log("TODO: Implement playVideo()");
    }
    changeSubreddit(): void {
    console.log("TODO: Implement changeSubreddit()");
    }

    loadMore(): void {
      console.log("TODO: Implement loadMore()");
    }

}
