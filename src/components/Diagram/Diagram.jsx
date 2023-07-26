import React from 'react';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import {useSelector} from "react-redux";
import {selectBalance} from "../../redux/transactions/transactionSelectors";
import {DiagramBalance, DiagramWrapper} from "./Diagram.styles";

export const Diagram = ({data}) => {

    const balance = useSelector(selectBalance);

    const labels = data.map(({name}) => name);
    const dataDiagram = data.map(({sum}) => sum);
    const backgroundColors = data.map(({color}) => color);

    const generateData = () => {
        return {
            labels,
            datasets: [
                {
                    data: dataDiagram.length ? dataDiagram : [100],
                    backgroundColor: backgroundColors.length ? backgroundColors : ['gray'],
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderJoinStyle: 'miter'
                },
            ],
            options: {
                responsive: true,
                cutoutPercentage: 50, // Задает размер "пустоты" внутри доната (0-100)
                legend: {
                    display: false, // Убираем легенду, но можно настроить её, если нужно
                },
            },
        }


    }

    const dataDoughnut = generateData();
    console.log(dataDoughnut)

    const options = {
        // responsive: true,
        cutoutPercentage: 100,
        plugins: {
            legend: {
                display: false, // Скрыть список
            },
        },
    };

    return <DiagramWrapper>
        <DiagramBalance>$ {balance}</DiagramBalance>
        <Doughnut data={dataDoughnut} options={options}/>
    </DiagramWrapper>;
}