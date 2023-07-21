import React from 'react';
import {StatisticItem} from "../StatisticItem/StatisticItem";
import {Finances, ListTitle, StatisticFinances} from "./StatisticList.styles";

export const StatisticList = ({statistic: {income, expenses}, list}) => {
    return list.length ? <div>
        <ListTitle><span>Category</span><span>Sum</span></ListTitle>
        <ul>
            {list.map((data, index) => <StatisticItem key={index} data={data}/>)}
        </ul>
        <StatisticFinances>
            <Finances  color={p => p.theme.colors.expense}><span>Expenses:</span> <span>{expenses.toFixed(2)}</span></Finances>
            <Finances  color={p => p.theme.colors.income}><span>Income:</span> <span>{income.toFixed(2)}</span></Finances>
        </StatisticFinances>
    </div> : <p>You didn't have expanded in these time...</p>
}