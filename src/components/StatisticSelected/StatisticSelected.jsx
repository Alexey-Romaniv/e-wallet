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
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2023 }, (_, i) => {
        const year = currentYear - i;
        return { value: String(year), label: String(year) };
    });

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
