import React from 'react';
import './usercard.css'; 
const Usercard = () => {

  const profilePhoto = 'https://www.w3schools.com/howto/img_avatar.png';
  const name = 'Raghava';
  const email = 'raghava@gmail.com';
  const phoneNumber = '123-456-7890';
  const address = 'vinukonda guntur';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">Email: {email}</p>
      <p className="usercard-phone">Phone: {phoneNumber}</p>
      <p className="usercard-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;