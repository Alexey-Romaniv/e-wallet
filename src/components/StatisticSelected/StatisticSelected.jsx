import React from "react";
import {SelectDate, SelectContainer} from "./StatisticSelected.styles";

export const StatisticSelected = ({setMonth, setYear}) => {
    const months = [
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
        {value: "2023", label: "2023"},
        {value: "2022", label: "2022"},
        {value: "2021", label: "2021"},
        {value: "2020", label: "2020"},
    ];


    const handleChangeMonth = (date) => {
      setMonth(date?.value || '')
    };
    const handleChangeYear = (date) => {
      setYear(date?.value || '');
    }
    return <SelectContainer>
        <SelectDate
            classNamePrefix="Select"
            placeholder="Month"
            options={months}
            onChange={handleChangeMonth}
            isClearable={true}
        />
        <SelectDate
            classNamePrefix="Select"
            placeholder="Year"
            options={years}
            onChange={handleChangeYear}
            isClearable={true}
        />
    </SelectContainer>
}