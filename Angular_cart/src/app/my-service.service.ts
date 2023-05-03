import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SOAP_API_URL } from 'environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

private cartItemsNum = 10;


  constructor(private http:HttpClient) { }

  getCartItems(){
    return this.cartItemsNum;
  }

   getAllProducts(){
    return this.http.get(SOAP_API_URL);

   }

   increaseCart(){
      this.cartItemsNum++;
      
   }

   decreaseCart(){
    if(this.cartItemsNum <= 0){
      this.cartItemsNum=0;
    }else{
      this.cartItemsNum--;
    }
    
   }
}
