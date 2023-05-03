import { Component, OnInit } from '@angular/core';
import { ProductObj } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { products } from '../mock-products';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit{
  productObj = products
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.getProduct;
  }

  // getProduct(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productService.getHero(id)
  //     .subscribe(hero => this.p = hero);
  // }

  goBack(): void {
    this.location.back();
  }

}
