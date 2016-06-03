import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared';
import {GadgetsComponent} from '../gadgets';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [GadgetsComponent]
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  myMessage: string = 'This is my Message';
  otherMessage: string = 'Other Message'
  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.message = this.messageService.getMessage();
    this.myMessage = this.messageService.getMyMessage();
  }

  updateMyMessage(m: string) {
     this.myMessage = this.messageService.setMyMessage(m);
  }

  updateMessage(m: string): void {
    this.body= this.messageService.setMessage(m);
  }

}






