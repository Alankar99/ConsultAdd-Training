import { Component, Type } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

type tcurrency = {
  [key: string]: number
};

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent {
  
  toCurrency = new FormControl('rupee');
  fromCurrency = new FormControl('rupee',{nonNullable:true});
  amount = new FormControl<any>('',[Validators.required]);

  //   Rupee = 1
  // US Dollar = 81.29
  // Pound = 99.42
  // UAE Dinar = 23.13
  // Chinese Yuan = 12.13
  constructor(){};
  
  currency:tcurrency = {
    'rupee': 1,
    'usDollar' : 81.29,
    'pound' : 99.42,
    'uaeDinar' : 23.13,
    'chineseYuan' : 12.13,
    'indonesianRupiah': 0.0054
  };
  result = '0';
  convert()
  {
    
    let tempRupee = 0;
    
    if(this.amount == null || this.fromCurrency == null || this.toCurrency == null)
    {
      this.result = '0';
    }
    else
    {
      let tempRupee = this.amount.value!*(this.currency[this.fromCurrency.value]);
      this.result = (tempRupee/(this.currency[this.toCurrency.value!])).toFixed(2);
      // variableName! -> Tell Typescript that this variable will not contain any NULL values
    }
  }
}
// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b