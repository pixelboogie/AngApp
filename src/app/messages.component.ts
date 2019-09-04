import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    //template: 'this is the message {{messages[0].text}}'
    template: 'this is the messages component <div *ngFor="let message of messages">{{message.text}} by: {{message.owner}}</div>'

})

export class MessagesComponent {
    messages = [{text: 'some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}];
}