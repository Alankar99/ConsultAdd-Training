import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bday-Sort';

  sortValue:any;

  getSortData(val:any)
  {
    this.sortValue = val;
  }
}
