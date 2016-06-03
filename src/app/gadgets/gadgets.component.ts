import {Component} from '@angular/core';

@Component ({
	selector: 'gadget',
	templateUrl: 'app/gadgets/gadgets.component.html'
})
export class GadgetsComponent {
	title: string = 'Gadget';
	myInput: string = '';
	color: string[] = [];
	elementColor : string ='';
    

	getValue() {
		console.log('I was clicked');
	}

	changeColor () {
		this.color = ['red', 'blue', 'purple'];
		this.elementColor = this.color[Math.floor(Math.random () * this.color.length)]
		console.log(this.elementColor);
	}
}

