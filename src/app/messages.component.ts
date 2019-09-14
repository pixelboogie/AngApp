import { Component } from '@angular/core'
import { WebService } from './web/service'

@Component({
    selector: 'messages',
    //template: 'this is the message {{messages[0].text}}'
    //template: 'This is the messages component <div *ngFor="let message of messages ">{{message.text}} by: {{message.owner}}</div>'
    template: `This is the messages component 
                <div *ngFor="let message of messages ">
                <mat-card style="margin:8px">
                      <mat-card-title>{{message.owner}}</mat-card-title> 
                    <mat-card-content> 
                        {{message.text}}
                    </mat-card-content> 
                </mat-card>
                </div>
            `

})

export class MessagesComponent {
    constructor(private webService : WebService) {}
    ngOnInit(){

    }




    messages = [{text: 'some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}];
}