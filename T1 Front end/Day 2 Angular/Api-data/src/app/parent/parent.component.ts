import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  myObj = {
    title: "This data is transfered from the parent component to the child component"
  }
  dataFromMyDataObj:any = null;
  tableHtml:any;

  getData(dataFromMyDataObj:any)
  {
    this.dataFromMyDataObj = dataFromMyDataObj;

    console.log(this.dataFromMyDataObj);
  }
}
