import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { products } from '../mock-products';
import { ProductObj } from '../product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: ProductObj[] = [];

  productObj = products
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
     this.getProducts;
  }

  goBack(): void {
    this.location.back();
  }

  getProducts(): void {
    this.productService.getAllProducts()
    .subscribe(products => this.products = products);
  }

}
