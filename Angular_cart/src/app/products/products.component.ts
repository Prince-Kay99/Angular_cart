import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{


/**WORK UNDER THIS SECTION---EDITS ONLY
 * products : Product[] = []
 * 
 * create constructor and initialize a productService
 * ngOnInit(){
 * 
 * this.api.getAllProducts().subscribe(data:any=>{this.product=data.products})
 * }
 */








/**----------ENDS HERE--------- */
  cartNum=0;

handleClick() {

  
 this.cartNum=this.api.getCartItems()
 this.api.increaseCart()
  console.log('this is my itemNum '+this.cartNum)
  
}

constructor(private api : MyServiceService){
  
}

// added code
// handleClick() {

  
//   this.cartNum=this.api.getCartItems()
//   this.api.increaseCart()
//    console.log('this is my itemNum '+this.cartNum)
   
//  }
 
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
