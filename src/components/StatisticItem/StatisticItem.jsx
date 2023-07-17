import React from "react";
import {CategoryItem} from "./StatisticItem.styles";

export const StatisticItem = ({data: {name, sum, color}}) => {
  return <CategoryItem color={color}>{name}: {sum}</CategoryItem>
}