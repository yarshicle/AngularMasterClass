import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitterlike',
  templateUrl: './twitterlike.component.html',
  styleUrls: ['./twitterlike.component.css']
})
export class TwitterlikeComponent {
  @Input() isLiked: boolean;
  @Input() likesCount: number;

  onLiked() {
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;
  }

}
