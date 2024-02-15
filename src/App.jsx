import React, { useState, useEffect } from 'react';
import './UserProfileCard.css'; 

function UserProfileCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="profile-card">
      {user && (
        <div>
          <div className="profile-img">
            <img src={user.picture.large} alt="User Avatar" />
          </div>
          <div className="profile-details">
            <h2 >{`${user.name.first} ${user.name.last}`}</h2>
            <p>{user.email}</p>
            <p>{user.location.city}, {user.location.country}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfileCard;

