import { FriendAvatar, ListFriend, ListFriendItem } from "./FriendList.styled";

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

const FriendListItem = ({id, avatar, name, isOnline}) => {
    return(
        <ListFriendItem key={id} online={isOnline}>
        <span className="status">
            {isOnline ? 'Online' : 'Offline'}
        </span>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </ListFriendItem>
    )
    }

