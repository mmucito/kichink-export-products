import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExportService {

  private kichinkApiUrl = 'https://api.kichink.com//kore/store/items';  // URL to web api

  constructor(private http: Http) { }

  exportProducts(store_id: number): Promise<any> {
    const body = new URLSearchParams();
    body.set('limit', '10000');
    body.set('cat_id', '');
    body.set('page', '1');

    const headers = new Headers({
      /*
      'Origin': 'https://www.kichink.com',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'es-MX,es;q=0.8,es-419;q=0.6,en;q=0.4',
      */
      'X-STORE-ID': store_id,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',

      /*'Referer': 'https://www.kichink.com/stores/siloe',
      'Connection': 'keep-alive'*/
    });
    return this.http.post(this.kichinkApiUrl, body.toString(), { headers: headers })
          .toPromise()
          .then(this.extractData)
        .catch(this.handleError);

  }

  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

}
