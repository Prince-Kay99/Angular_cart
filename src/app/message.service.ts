import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './hero';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor( private http: HttpClient, private messageService: MessageService) { }

  messages: string[] = [];



  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}