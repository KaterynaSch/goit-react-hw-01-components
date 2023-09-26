import {user} from 'path/to/user.json'

export function Profile({username, tag, location, avatar, stats}){
    return (
        <div class="profile">
        <div class="description">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt={avatar}
            class="avatar"
          />
          <p class="name">{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </div>
      
        <ul class="stats">
          <li>
            <span class="label">{stats.followers}</span>
            <span class="quantity">1000</span>
          </li>
          <li>
            <span class="label">{stats.views}</span>
            <span class="quantity">2000</span>
          </li>
          <li>
            <span class="label">{stats.likes}</span>
            <span class="quantity">3000</span>
          </li>
        </ul>
      </div> 
    );
}