import './CurrencyInput.css';

import { render } from "@testing-library/react";
import { useState , useEffect } from 'react';

function CurrencyInput()
{
    // const [inputItems , setInputItems] = useState(['0','rupee','rupee']);
    const [inputItems , setInputItems] = useState({ 'amount':0 , 'fromCurrency':'rupee' , 'toCurrency':'rupee'});
    const [result , setResult] = useState('0');
    
    // const [inputCurrency , setInputCurrency] = useState('Rupee');
    // const [amount , setAmount] = useState('0');
    // const [outputCurrency , setOutputCurrency] = useState('Rupee');
    
    let currency = {
      'rupee': 1,
      'usDollar' : 81.29,
      'pound' : 99.42,
      'uaeDinar' : 23.13,
      'chineseYuan' : 12.13,
      'indonesianRupiah': 0.0054
    };
    
    function handleSubmit(e)
    {
        e.preventDefault();
        let form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);

        // setInputItems(/[formJson.amount , formJson.fromCurrency , formJson.toCurrency]);

        setInputItems({ 'amount':formJson.amount , 'fromCurrency':formJson.fromCurrency , 'toCurrency':formJson.toCurrency});
        // setAmount(formJson.amount);
        // setInputCurrency(formJson.inputCurrency);
        // setOutputCurrency(formJson.outputCurrency);
    }
    useEffect(()=>
        {
            // console.log(inputItems);

            let tempRupee = inputItems.amount*(currency[inputItems.fromCurrency]);
            let ans = (tempRupee/(currency[inputItems.toCurrency])).toFixed(2);
            setResult(ans);
            // variableName! -> Tell Typescript that this variable will not contain any NULL value
        }
        );
        return(
            <>
                <form onSubmit={handleSubmit} >
                <div className="card">
                <div>
                    <input id="amt" type="number" name="amount" placeholder="Enter amount" required/>
                </div>
    
                <div className="select-currency">
                <div>
                    <span>From</span>
                    <select name="fromCurrency" className="dropDown">
                    
                    <option value="rupee"> Rupee </option>
                    <option value="usDollar"> US Dollar </option>
                    <option value="pound"> Pound </option>
                    <option value="uaeDinar"> UAE Dinar</option>
                    <option value="chineseYuan">Chinese Yuan</option>
                    <option value="indonesianRupiah">Indonesian Rupiah </option>
                    </select>
                </div>
            
                <div>
                    <span>To</span>
                    <select name="toCurrency" className="dropDown">
                        <option value="rupee"> Rupee </option>
                        <option value="usDollar"> US Dollar </option>
                        <option value="pound"> Pound </option>
                        <option value="uaeDinar"> UAE Dinar</option>
                        <option value="chineseYuan">Chinese Yuan</option>
                        <option value="indonesianRupiah">Indonesian Rupiah </option>
                    </select>
                    </div>
                </div>
                
                <button type="submit" className="btn">
                    Convert
                </button>
                
                <div className="result">
                    {result}
                </div>

                </div>
                </form>
      </>
    );
}

export default CurrencyInput;