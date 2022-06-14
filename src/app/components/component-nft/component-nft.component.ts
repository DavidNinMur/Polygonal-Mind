import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-nft',
  templateUrl: './component-nft.component.html',
  styleUrls: ['./component-nft.component.css']
})
export class ComponentNftComponent implements OnInit {

  @Input() dataNftList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
