import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    margin: 28px auto 0;
    padding: 18px 0 0;  
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 1px solid rgba(5, 5, 5, 0.20); 
    background-color: white;
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;     
    background-color: white;    
`
export const Avatar = styled.img`
    width: 100px;
    border: 1px solid rgba(5, 5, 5, 0.20); 
    border-radius: 50%;
`
export const UserName = styled.p`
    font-weight: 600;
`
export const StatsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
    border-top: 1px solid rgba(5, 5, 5, 0.20);
    background-color: rgba(49, 208, 170, 0.1);
`
export const StatsListItem = styled.li`
    height: 48px;    
    display: flex;  
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;    
`
export const ItemName = styled.span`
    font-size: 14px;
    color: #434455;
` 