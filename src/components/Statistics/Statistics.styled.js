import styled from "styled-components";
import { border, greenColor } from "components/Profile/Profile.styled";

export const SectionStat = styled.section`
    width: 100%;   
    padding-top: 28px; 
    border-top: none;
    border: ${border}; 
       
`
export const StatisticsTitle = styled.h2`
    margin-bottom: 18px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${greenColor};
`
