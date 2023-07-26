import React from "react";
import {CurrencyBody, CurrencyHeader, CurrencyTable} from "./CurrencyInfo.styles";


export const CurrencyInfo = ({currency}) => {

return <CurrencyTable>
    <thead>
    <CurrencyHeader>
        <th>Currency</th>
        <th>Sale</th>
    </CurrencyHeader>
    </thead>
    <tbody>
    {currency.map((el, index) => {
        return <CurrencyBody key={index}>
            <td>{el.asset_id_base}</td>
            <td>{el.rate.toFixed(2)}</td>
        </CurrencyBody>
    })
    }
    </tbody>
</CurrencyTable>

}