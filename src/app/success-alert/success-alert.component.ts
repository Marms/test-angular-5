import { Component} from '@angular/core';

@Component({
  selector: '[app-success-alert]', // use by attribut of HTML element
  template: '<p>Success message</p>',
  styles: [`
  	p { 
  		background-color: #c8e6c9;
  		font-weight: bold;
  		border: 1px solid green;}
  `]
})
export class SuccessAlertComponent{}
