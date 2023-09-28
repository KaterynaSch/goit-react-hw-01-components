import { Profile } from "./Profile/Profile";
import user from "../user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
        backgroundColor: 'rgba(231, 233, 252, 1)'
      }}
    >
      <Profile user={user}/>
      <Statistics stats={data} title="Upload stats"/>   
      <FriendList friends={friends}/> 
      <TransactionHistory items ={transactions}/>
    </div>
  );
};
