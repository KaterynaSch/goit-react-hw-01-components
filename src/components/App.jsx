import { Profile } from "./Profile/Profile";
import user from "../Data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../Data/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../Data/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../Data/transactions.json';
import { MainContainer } from "./MainContainer/MainContainer.styled";


export const App = () => {
  return (
    <MainContainer>
      <Profile user={user}/>
      <Statistics stats={data} title="Upload stats"/>   
      <FriendList friends={friends}/> 
      <TransactionHistory items ={transactions}/>
    </MainContainer>
  );
};
