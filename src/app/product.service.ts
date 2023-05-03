import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductObj } from './product';
import {products } from './mock-products';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'https://fakestoreapi.com/products/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private messageService: MessageService) { }



  /** GET heroes from the server */
 // getAllProducts(): Observable<ProductObj[]> {
   // return this.http.get<ProductObj[]>(this.productsUrl=>console.log())
      // .pipe(
      //   tap(_ => this.log('fetched heroes')),
      //   catchError(this.handleError<ProductObj[]>('getAllProducts', []))
      //);
      getAllProducts(){
      this.http.get(this.productsUrl).subscribe((data) => console.log(data))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // getAllProducts(): Observable<ProductObj[]> {
  //   const productsAll = of(products);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return productsAll;
  // }

  getSingleProduct(id: number): Observable<ProductObj> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const singleProduct = products.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched product id=${id}`);
    return of(singleProduct);
  }
}
