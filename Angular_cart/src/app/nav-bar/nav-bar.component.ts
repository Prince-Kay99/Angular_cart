import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public itemsincart: number = 0

  constructor(private api : MyServiceService){

  }

  public productList : any

  ngOnInit(): void {
   
    
    }
   
    getItemSize(){
      this.api.getCartItems
      this.api.increaseCart
    }
  


}



