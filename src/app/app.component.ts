import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({ 
  selector: 'app-root',
  template: '<h1>Howdy! {{title}}</h1><messages></messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend!!';
}