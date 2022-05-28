import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-validator',
  templateUrl: './feedback-validator.component.html',
  styleUrls: ['./feedback-validator.component.css']
})
export class FeedbackValidatorComponent {

  @Input() submitted : boolean;
  @Input() errors : any;
  @Input() attr = 'Field';

  constructor() {
    this.submitted = false;
    this.errors = {};
  }

}
