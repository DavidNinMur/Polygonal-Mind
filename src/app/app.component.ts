import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetServices } from "src/app/services/get.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'polygon-technical-test';


  constructor(
    private http: HttpClient,
    private _getService: GetServices
  ) { }

  public nftParsedList: Array<any> = [];
  public nftImageParsedList: Array<any> = [];
  public unparsedCryptoAvatars: any = [];
  public componentMount: Boolean = false;

  async ngOnInit() {
    await this.getLastThreeNft();
    this.componentMount = true;
  }


  async getLastThreeNft() {
    this._getService.getCryptoAvatarCollectionList().subscribe(
      async (unparsedCryptoAvatarsList: any) => {
        console.log('unparsedCryptoAvatarsList :>> ', unparsedCryptoAvatarsList);
        this.unparsedCryptoAvatars = unparsedCryptoAvatarsList;
        await this.getLastThreeNftParsed(unparsedCryptoAvatarsList)
        await this.getRandomNftImg();
      },
      (error) => {
        console.log('error :>> ', error);
      }
    );
  }

  async getRandomNftImg() {
    const addressForPrimaryContract = this.unparsedCryptoAvatars.collection.primary_asset_contracts[0].address;

    const unparsedNftList = await this.getRandomNftObjUnparsed(addressForPrimaryContract);


    this.nftImageParsedList = JSON.parse(JSON.stringify(this.dataParser(unparsedNftList)));
  }



  async getLastThreeNftParsed(unparsedCryptoAvatarsList: any) {
    const addressForPrimaryContract = unparsedCryptoAvatarsList.collection.primary_asset_contracts[0].address;

    const unparsedNftList = await this.getLastThreeNftUnparsed(addressForPrimaryContract);

    this.nftParsedList = JSON.parse(JSON.stringify(this.dataParser(unparsedNftList)));
  }

  async getLastThreeNftUnparsed(addressForPrimaryContract: string) {
    const unparsedNftList = [];

    for (let index = 0; index < 3; index++) {
      unparsedNftList.push(new Promise((resolve, reject) => {
        this._getService.getCryptoAvatarInfo(addressForPrimaryContract, index).subscribe(
          (unparsedCryptoAvatarObj) => {
            resolve(unparsedCryptoAvatarObj)
          },
          (error) => {
            reject(error);
          }
        );
      }));
    }
    return Promise.all(unparsedNftList);
  }

  async getRandomNftObjUnparsed(addressForPrimaryContract: string) {
    const unparsedNftList = [];
    const mathRandom = Math.floor(Math.random() * 30) + 1

    unparsedNftList.push(new Promise((resolve, reject) => {
      this._getService.getCryptoAvatarInfo(addressForPrimaryContract, mathRandom).subscribe(
        (unparsedCryptoAvatarObj) => {
          resolve(unparsedCryptoAvatarObj)
        },
        (error) => {
          reject(error);
        }
      );
    }));
    return Promise.all(unparsedNftList);
  }

  dataParser(unparsedNftList: Array<any>) {
    const newParsedNftList: Array<Object> = [];

    unparsedNftList.forEach((nftObj) => {
      let newParsedNftObj: any = {};

      newParsedNftObj['nameStr'] = nftObj.name;
      newParsedNftObj['descriptionStr'] = nftObj.description;
      newParsedNftObj['imageUrl'] = nftObj.image_url;

      newParsedNftList.push(newParsedNftObj)
    })

    return newParsedNftList;
  }

}
