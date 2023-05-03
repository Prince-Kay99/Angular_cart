import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';
import { ProductObj } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
  { id: 1, name: 'BMW M340I', price: 'R1 140 000',  details: ' BMW India has introduced the new and updated M340i at South Africa First-ever music and driving festival' },
  { id: 2, name: 'BMW M330I', price: '940 000',  details: ' BMW India has introduced the new and updated M340i at South Africa First-ever music and driving festival' },
  { id: 3, name: 'BMW M3 Competition', price: 'R2 140 000',  details: ' BMW India has introduced the new and updated M340i at South Africa First-ever music and driving festival' }
  
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: ProductObj[]): number {
    return products.length > 0 ? Math.max(...products.map(products => products.id)) + 1 : 11;
  }
}