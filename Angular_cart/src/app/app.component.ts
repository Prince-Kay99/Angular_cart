import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Store';
  constructor(private api: MyServiceService){

  }

  ngOnInit(){
    this.api.getAllProducts().subscribe((data)=>{
      console.warn("get api data", data);
    })
  }
}
