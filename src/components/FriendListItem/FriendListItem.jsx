import { FriendAvatar, ListFriendItem, UserStatus } from "./FriendListItem.styled"

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return(
        <ListFriendItem key={id} >        
        <UserStatus data-status={isOnline.toString()} />       
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </ListFriendItem>
    )
    }
