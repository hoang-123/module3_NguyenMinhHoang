import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }

  ngOnInit() {
  }
}
