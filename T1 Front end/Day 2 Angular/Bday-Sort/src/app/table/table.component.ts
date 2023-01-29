import { Component , Input, OnInit, SimpleChange } from '@angular/core';
import { count, takeLast } from 'rxjs';
import { MyApiService } from '../service/my-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private myApiService: MyApiService){}

  @Input() sortValue:any=-1;

  tableData:any;

  ngOnInit()
  {
    this.myApiService.getUserData().subscribe((result) => {
      console.log(result);
  
      this.tableData = result;
    })
  }

  sortTableByName()
  {
    console.log("table sorted by Name");

    let newtableData = this.tableData.sort((a:any , b:any) =>
    { 
      if(a.name < b.name)
      {
        return -1;
      }
      else
      return 1;
    })

    this.tableData = newtableData;
  }

  sortTableByAge()
  {
    console.log("table sorted by Age");

    let newtableData = this.tableData.sort((a:any,b:any) =>
    {
      let date1 = a.birthDate.split("/");
      let date2 = b.birthDate.split("/");

      for(let i=2 ; i>=0;i--)
      {
        if(date1[i] < date2[i])
        {
          return -1;
        }
        else if(date1[i] > date2[i])
        {
          return 1;
        }
      }
      return 0;
    });
    this.tableData = newtableData;
  }


  ngOnChanges(change : SimpleChange)
  {
    let propName :keyof typeof change;
    for(propName in change)
    {
      console.log(change[propName].currentValue);
      if (change[propName].currentValue == 0) 
      {
        this.sortTableByName(); 
      }
      else if(change[propName].currentValue == 1)
      {
        this.sortTableByAge();
      }
    }

  }
}
