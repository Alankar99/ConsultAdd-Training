import { Component , EventEmitter, Input , Output} from '@angular/core';
import { MyApiService } from '../services/my-api.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() dataMyObj:any;

  @Output() transferEvent = new EventEmitter();

  myApiDataObject:any;

  constructor(private service:MyApiService){}

  transferData(e:any)
  {
    let myPromise = new Promise((resolve , reject)=>
    {
      this.service.getPostdata().subscribe((res) =>
      {
      this.myApiDataObject = res;
      resolve(this.myApiDataObject);
      });
    })
    myPromise.then((val) =>
    {
    this.transferEvent.emit(val);
    })
  }
  

  // setTimeout(() => {
  //   this.transferEvent.emit(this.myApiDataObject);
  // }, 3000);
  // }
}
