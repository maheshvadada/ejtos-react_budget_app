import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses, budget, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    if(totalExpenses > budget) {
        alert("You cannot reduce the budget value lower than the spending");
    }
    const handleBudgetChange = (event) => {
        // setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;