import styled from "styled-components";

export const ListFriend = styled.ul`
    width: 300px;
    margin: 18px auto;
    display: flex;
    flex-direction :column;
    gap: 4px;
   
`
export const ListFriendItem = styled.li`
   
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(5, 5, 5, 0.20);
    border-radius: 4px; 
    background-color: white;
     .status {
    color: ${props => (props.online ? 'green' : 'red')};
  }     
`
export const FriendAvatar = styled.img`
    border: 1px solid rgba(5, 5, 5, 0.20);
    border-radius: 50%; 
    background-color: rgba(49, 208, 170, 0.1);
`