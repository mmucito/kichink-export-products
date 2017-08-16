import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ExportService } from './export.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  objLoaderStatus: boolean;
  exportForm: FormGroup;

  constructor(private fb: FormBuilder, private exportService: ExportService) {
    this.objLoaderStatus = false;
    this.createForm();
  }

  createForm() {
    this.exportForm = this.fb.group({
      store_id: ''
    });
  }




  export(): void {
    const products = [];
    this.objLoaderStatus = true;
    this.exportService.exportProducts(this.exportForm.value['store_id'])
    .then(result => {
      this.objLoaderStatus = false;
      result.data.forEach(element => {
        let product_type = '';

        element.categories.forEach(category => {
          let separator = '';

          if (product_type !== '') {
            separator = ' > ';
          }

          product_type = product_type + separator + category.name;
        });

        const product = {
          'id': element.id,
          'title': element.name,
          'ios_url': '',
          'ios_app_store_id': '',
          'ios_app_name': '',
          'android_url': '',
          'android_package': '',
          'android_app_name': '',
          'windows_phone_url': '',
          'windows_phone_app_id': '',
          'windows_phone_app_name': '',
          'description': element.description,
          'google_product_category': product_type,
          'product_type': product_type,
          'link': 'https://www.kichink.com/buy/' + element.id + '/',
          'image_link': element.images[0].bordered,
          'condition': (element.new_item === '1') ? 'new'  : 'used',
          'availability': 'in stock',
          'price': element.price + 'MXN',
          'sale_price': (element.price - element.discount_price) + 'MXN',
          'sale_price_effective_date': '',
          'gtin': '',
          'brand': element.storeUrl,
          'mpn': '',
          'item_group_id': '',
          'gender': '',
          'age_group': '',
          'color': '',
          'size': '',
          'shipping': '',
          // 'custom_label_0': element.name,
        };
        products.push(product);
      });
      const headers = [
        'id',
        'title',
        'ios_url',
        'ios_app_store_id',
        'ios_app_name',
        'android_url',
        'android_package',
        'android_app_name',
        'windows_phone_url',
        'windows_phone_app_id',
        'windows_phone_app_name',
        'description',
        'google_product_category',
        'product_type',
        'link',
        'image_link',
        'condition',
        'availability',
        'price',
        'sale_price',
        'sale_price_effective_date',
        'gtin',
        'brand',
        'mpn',
        'item_group_id',
        'gender',
        'age_group',
        'color',
        'size',
        'shipping',
        // 'custom_label_0': element.name,
      ];
      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: false,
        useBom: false,
        headers: headers
      };
      const file = new Angular2Csv(products, 'Kichink Products', options);
    })
    .catch(error => console.log(error));
  }


}
