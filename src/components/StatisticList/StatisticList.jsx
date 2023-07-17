import React from 'react';
import {StatisticItem} from "../StatisticItem/StatisticItem";

export const StatisticList = ({statistic: {income, expenses}, list}) => {
  return list.length ? <div>
    <ul>
      {list.map((data, index) => <StatisticItem key={index}  data={data}/>)}
    </ul>
    <p>Expenses: {expenses}</p>
    <p>Income: {income}</p>

  </div> : <p>You didn't have expanded in these time...</p>
}