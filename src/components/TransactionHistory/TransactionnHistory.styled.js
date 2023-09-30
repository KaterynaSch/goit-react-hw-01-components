import styled from "styled-components"; 
import { border } from "components/Profile/Profile.styled";
export const Table = styled.table`
    width: 100%;    
    border-collapse: collapse;    
  
`
export const TableHead = styled.th`
    
    padding: 10px;
    border: ${border};  
    background-color: rgba(49, 208, 170, 0.1) ;
`
export const TableData = styled.td`   
    padding: 10px;
    border: ${border};  
    
`