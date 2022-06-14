import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetServices {
  constructor(private _http: HttpClient) { }

  getCryptoAvatarCollectionList() {
    return this._http.get('https://api.opensea.io/api/v1/collection/cryptoavatars')
  }

  getCryptoAvatarInfo(assetContractAddress: string, tokenId: number) {
    return this._http.get(`https://api.opensea.io/api/v1/asset/${assetContractAddress}/${tokenId}`)
  }
}