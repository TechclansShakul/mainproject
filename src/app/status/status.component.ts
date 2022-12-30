import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      404. ERROR. Requested Page is not found 
    </h4>
  `,
  styles: [
    "h4{color:red;font-size:50px}"
  ]
})
export class StatusComponent {

}
