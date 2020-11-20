import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PostFeedDialogComponent } from './post-feed-dialog/post-feed-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialogService: NbDialogService
  ){}
  title = 'coresol-dialog';
  description = "With this pioneering study, we have opened a door for further research on the prolonged cellular impact of the therapy to reverse the ageing process. After dedicating our research to exploring its impact on the areas of brain functionality and age-related cognitive decline, we have now uncovered, for the first time in humans, biological effects at the cellular level in healthy ageing adults." ;
  content = [
    {
      url: 'https://imgur.com/nTT8n18.png'
    },
    {
      url: 'https://imgur.com/LBRXhIq.png'
    },{
      url: "https://imgur.com/jF5kfv0.png"
    },{
      url: 'https://imgur.com/ARMxyC4.png'
    }
  ];

  contentVideo = [
    {
      url: 'https://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      url: 'https://vjs.zencdn.net/v/oceans.mp4'
    }
  ];


  handleClick(){
    this.dialogService.open(PostFeedDialogComponent, {
      context: {
        content: this.content,
        description: this.description,
        mediaType: 'image'
      }
    })
    .onClose.subscribe(name => console.log('dialog closed'));
  }

  handleClickVideo(){
    this.dialogService.open(PostFeedDialogComponent, {
      context: {
        content: this.contentVideo,
        description: this.description,
        mediaType: 'video'
      }
    })
    .onClose.subscribe(name => console.log('dialog closed'));
  }
}
