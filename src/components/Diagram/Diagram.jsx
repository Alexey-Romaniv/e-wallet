import React from 'react';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import {useSelector} from "react-redux";
import {selectBalance} from "../../redux/transactions/transactionSelectors";

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

        }

    }

    const dataDoughnut = generateData();
    console.log(dataDoughnut)

    const options = {
        plugins: {
            legend: {
                display: false, // Скрыть список
            },
        },
    };

    return <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
            <span style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>{balance}</span>
        <Doughnut data={dataDoughnut} options={options}/>
    </div>;
}