import React, {useEffect, useState} from 'react';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import {Container} from "../../components/CommonComponents/Container.styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchStatistic} from "../../redux/transactions/transactionsOperations";
import {selectStatistic} from "../../redux/transactions/transactionSelectors";
import {selectBalance} from "../../redux/transactions/transactionSelectors";
import {Navigation} from "../../components/Navigation/Navigation";

const StatisticPage = () => {
    const [monthValue, setMonthValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatistic({monthValue, yearValue}));
    }, [dispatch, monthValue, yearValue]);

    const statistic = useSelector(selectStatistic);
    const balance = useSelector(selectBalance)

    if (!statistic) return <div>Loading...</div>

    const generateRandomColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.7)`;
            colors.push(color);
        }
        return colors;
    };

    const backgroundColors = generateRandomColors(Object.values(statistic.categories).length);
    const combinedArray = Object.values(statistic.categories).map((el, index) => {
        return {
            name: Object.keys(statistic.categories)[index],
            sum: el,
            color: backgroundColors[index]
        }
    })

    const generateData = (categories) => {


        const labels = Object.keys(categories);
        const data = Object.values(categories);


        return {
            labels,
            datasets: [
                {
                    data: data.length ? data : [1],
                    backgroundColor: backgroundColors.length ? backgroundColors : ['gray'],
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderJoinStyle: 'miter'
                },
            ],

        }

    }

    const dataDoughnut = generateData(statistic.categories);

    const options = {
        plugins: {
            legend: {
                display: false, // Скрыть список
            },
        },
    };
    const months = [
        {value: "", label: "Month"},
        {value: "01", label: "January"},
        {value: "02", label: "February"},
        {value: "03", label: "March"},
        {value: "04", label: "April"},
        {value: "05", label: "May"},
        {value: "06", label: "June"},
        {value: "07", label: "July"},
        {value: "08", label: "August"},
        {value: "09", label: "September"},
        {value: "10", label: "October"},
        {value: "11", label: "November"},
        {value: "12", label: "December"},
    ];
    const years = [
        {value: "", label: "Year"},
        {value: "2023", label: "2023"},
        {value: "2022", label: "2022"},
        {value: "2021", label: "2021"},
        {value: "2020", label: "2020"},
    ]
    const handleChangeMonth = (e) => {
        setMonthValue(e.target.value)
    };
    const handleChangeYear = (e) => {
        setYearValue(e.target.value)
    };
    return <Container>
        <Navigation/>
        <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
            <span style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>{balance}</span>
            <Doughnut data={dataDoughnut} options={options}/>
        </div>
        <select value={monthValue} onChange={handleChangeMonth}>
            {months.map(({value, label}, index) => <option key={index} value={value} label={label}></option>)}
        </select>
        <select value={yearValue} onChange={handleChangeYear}>
            {years.map(({value, label}, index) => <option key={index} value={value} label={label}></option>)}
        </select>
        {combinedArray.length ? <>
        <ul>
            {combinedArray.map((el, index) => <li key={index}
                                                  style={{backgroundColor: `${el.color}`}}>{el.name}: {el.sum}</li>)}
        </ul>
        <p>Expenses: {statistic.expenses}</p>
        <p>Income: {statistic.income}</p> </> : <p>You didn't have expanded in these time...</p>}
    </Container>
}
export default StatisticPage;