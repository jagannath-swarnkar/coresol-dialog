import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-post-feed-dialog',
  templateUrl: './post-feed-dialog.component.html',
  styleUrls: ['./post-feed-dialog.component.scss']
})
export class PostFeedDialogComponent implements OnInit {
  @Input() content:any[] = [];
  @Input() description: any;
  @Input() title: any;
  @Input() mediaType: any;

  imageIndex = 0;
  imagesList = [];
  sliderInterval:any;
  constructor(
    private ref: NbDialogRef<PostFeedDialogComponent>
  ) { }

  ngOnInit(): void {
    if(this.content && this.content.length){
      this.imagesList = this.content.map(x=>x.url);
    }
    if(this.mediaType == 'image'){
      this.sliderInterval = setInterval(()=>{
        this.handleSlide(true)
      }, 5000)
    }
  }

  close(){
    clearInterval(this.sliderInterval)
    this.ref.close()
  }

  /**
   * @description this method is to slide images
   * @author Jagannath
   * @date 2020-11-19
   * @param res left-0, right-1
   */
  handleSlide(res){
    console.log(res, this.imageIndex, this.imagesList)
    if(res){
      if( this.imageIndex == this.imagesList.length -1){
        this.imageIndex = 0
      }else{
        this.imageIndex = this.imageIndex + 1
      }
    }else{
      if(this.imageIndex){
        this.imageIndex = this.imageIndex - 1
      }else{
        this.imageIndex = this.imagesList.length -1
      }
    }
  }

}
