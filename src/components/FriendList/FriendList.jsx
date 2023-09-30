import { ListFriend } from "./FriendList.styled";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
<ListFriend >
    {friends.map((item) => (
        <FriendListItem key={item.id}  avatar={item.avatar}
        name={item.name} isOnline={item.isOnline}/>
      ))}
</ListFriend>
    )
};

