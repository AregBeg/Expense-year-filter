import React from 'react';
import { useState,useEffect } from 'react';

import './ExpensesFilter.css';


const ExpensesFilter = (props) => {

    useEffect(() => {
        props.onChangeYear(yearValue);
    })

    const [yearValue,setYearValue] = useState("")
    

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(e) => setYearValue(e.target.value)}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;