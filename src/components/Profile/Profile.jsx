import { Avatar, Description, ItemName, StatsList, StatsListItem, UserName, Wrapper } from "./Profile.styled";
export const Profile = ({user:{username, tag, location, avatar, stats}}) => {
 
    return (
      <Wrapper >
        <Description >
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt={avatar}            
          />
          <UserName>{username}</UserName>
          <p >{'@'+tag}</p>
          <p >{location}</p>
        </Description>
      
        <StatsList>
          <StatsListItem>
            <ItemName>Followers</ItemName>            
            <span>{stats.followers}</span>
          </StatsListItem>
          <StatsListItem>
            <ItemName>Views</ItemName>          
            <span>{stats.views}</span>
          </StatsListItem>
          <StatsListItem>
            <ItemName>Likes</ItemName>          
            <span>{stats.likes}</span>
          </StatsListItem>
        </StatsList>
      </Wrapper> 
    );
}