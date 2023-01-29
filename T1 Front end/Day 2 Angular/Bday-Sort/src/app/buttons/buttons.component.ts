import { Component , EventEmitter, Output } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  form:FormGroup = new FormGroup(
    {
      sortBy : new FormControl(),
    }
  );
  sort:any;
  
  @Output() sortTranferEvent = new EventEmitter();


  onSubmit()
  {
    // console.log(this.form.value.sortBy);
    this.sort = this.form.value.sortBy;

    this.sortTranferEvent.emit(this.sort);
  }
}
