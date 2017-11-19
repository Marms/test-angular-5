import { Component} from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: '<p>Warning message</p>',
  styles: [`
  	p {
  		 background-color: mistyrose;
  		 font-weight: bold;
  		 border: 1px solid red;
  	}
  `]
})
export class WarningAlertComponent {
}
