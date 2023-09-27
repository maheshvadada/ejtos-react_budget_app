import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencyList = [
        {key:"$",value:"Dollar"},
        {key:"£",value:"Pound"},
        {key:"€",value:"Euro"},
        {key:"₹",value:"Ruppee"}
    ];
    const getCUrrencyValue = (currencyKey) => {
        let currencyVal = "";
        currencyList.forEach((curr)=>{
            if(currencyKey == curr.key){
                currencyVal = curr.value;
            }
        })
        return currencyVal;
    }
    const handleCurrencyChange = (e,curr) => {
        e.preventDefault();
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        })
    }
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Currency: ({currency} {getCUrrencyValue(currency)})
            </button>
            <ul className="btn btn-success dropdown-menu">
              {currencyList.map((curr,i)=>(
                  <li key={i}><a className="dropdown-item" href="#" onClick={(e)=>{handleCurrencyChange(e,curr.key)}}>{curr.key} {curr.value}</a></li>
                ))}
            </ul>
        </div>
    );
};
export default Currency;