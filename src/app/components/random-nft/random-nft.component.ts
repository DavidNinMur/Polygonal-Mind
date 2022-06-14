import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random-nft',
  templateUrl: './random-nft.component.html',
  styleUrls: ['./random-nft.component.css']
})
export class RandomNftComponent implements OnInit {

  @Input() nftImageParsedList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
