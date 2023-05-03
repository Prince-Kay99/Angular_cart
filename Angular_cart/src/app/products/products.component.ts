import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  cartNum=0;
handleClick() {

 this.cartNum=this.api.getCartItems()
 this.api.increaseCart()
  console.log('this is my itemNum '+this.cartNum)
  
}

constructor(private api : MyServiceService){

}
public productList : any

  ngOnInit(): void {

    this.api.getAllProducts()
    .subscribe(res=>{
      this.productList=res;
    })

    this.api.getCartItems()


  }

  // handleCLick(event:Event){
  //   this.api.increaseCart;
  // }

}
