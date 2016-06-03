import {Component} from '@angular/core';
import {MessageService} from '../shared';

@Component ({
	selector: 'gadget',
	templateUrl: 'app/gadgets/gadgets.component.html'
})
export class GadgetsComponent {
	title: string = 'Gadget';
	myInput: string = '';
	color: string[] = [];
	elementColor : string ='';
	sendMessage : string = '';
	serviceMessage: string = 'Something';
	stayM: string = 'stayMessage';
    
	constructor(private messageService: MessageService) { }

	setValue (inputValue: string) {
		this.serviceMessage = this.messageService.setMessageOnService(inputValue);
	}

	stayMessage(s:string) {
		this.stayM = this.messageService.stayMessageD(s);
	}

	changeColor () {
		this.color = ['red', 'blue', 'purple'];
		this.elementColor = this.color[Math.floor(Math.random () * this.color.length)]
		console.log(this.elementColor);
	}
}

