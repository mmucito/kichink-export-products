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

        let google_product_category = '';
        if (element.categories.length > 0) {
          if (element.categories[0].name.toLowerCase().indexOf('contacto') >= 0) {
            google_product_category = 'Salud y belleza > Cuidado personal > Cuidado visual > Lentes de contacto';
          }else if (element.categories[0].name.toLowerCase().indexOf('sol') >= 0) {
            google_product_category = 'Ropa y accesorios > Complementos > Gafas de sol';
          }
        }

        const product = {
          'id': element.id,
          'gtin': element.id,
          'title': element.name,
          'description': element.description,
          'google_product_category': google_product_category,
          'product_type': product_type,
          'link': 'http://siloe.me/?product=https://www.kichink.com/buy/' + element.id + '/&id=' + element.id + '&value=' + element.price,
          'image_link': element.images[0].bordered,
          'condition': 'new',
          'availability': 'in stock',
          'price': element.price + ' MXN',
          'sale_price': (element.price - element.discount_price) + ' MXN',
          'brand': (element.categories.length > 0) ? element.categories[element.categories.length - 1].name : '',
          // 'custom_label_0': element.name,
        };

        products.push(product);
      });

      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: false,
        useBom: false,
        headers: Object.keys(products[0])
      };
      const file = new Angular2Csv(products, 'Kichink Products', options);
    })
    .catch(error => console.log(error));
  }


}
