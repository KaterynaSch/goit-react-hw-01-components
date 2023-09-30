import styled from "styled-components";
export const border = '1px solid rgba(5, 5, 5, 0.20)';
export const greenColor = '#434455';

export const Wrapper = styled.div`
    width: 100%;        
    padding-top: 18px;  
    display: flex;
    flex-direction: column;  
    gap: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: ${border};    
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;        
`
export const Avatar = styled.img`
    width: 100px;
    border: ${border}; 
    border-radius: 50%;
`
export const UserName = styled.p`
    font-weight: 600;
`
export const StatsList = styled.ul`   
    display: flex;    
    justify-content: space-around;        
    border-top: ${border};
    background-color: rgba(49, 208, 170, 0.1);
`
export const StatsListItem = styled.li`
    height: 48px;    
    display: flex;  
    flex-wrap: wrap;
    align-items: center;    
    flex-direction: column;
    justify-content: center;
    gap: 4px;    
`
export const ItemName = styled.span`
    font-size: 14px;
    color:${greenColor};
` 