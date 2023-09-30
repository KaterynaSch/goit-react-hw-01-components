import styled from "styled-components";
import { border } from "components/Profile/Profile.styled";
export const ListFriendItem = styled.li`
   
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;    
    gap: 24px;
    border: ${border};
    border-radius: 4px;     
        
`
export const FriendAvatar = styled.img`
    border: ${border};
    border-radius: 50%; 
    background-color: rgba(49, 208, 170, 0.1);
`
export const UserStatus = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => (props['data-status'] === 'true'? 'green' : 'red')};
`