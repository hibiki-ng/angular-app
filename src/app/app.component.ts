import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'counter';
  public count = 5;
  public product: any;
  public products: any;

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }

  public fetchProducts() {
    this.httpClient.get('https://fakestoreapi.com/products')
      .subscribe((res: any) => {
        this.product = res[0];
        this.products = res.slice(0, 6);
      });
  }

  public add() {
    this.count++;
  }

  public minus() {
    this.count--;
  }
}
