import React from 'react';
import styles from '../styles/ProfileCard.css'; //Importación archivp ProfileCard.CSS 

// Definición el componente ProfileCard
const ProfileCard = ({ name, description }) => {
  return (
    <div className="profile-card"> 
      <h2 className="profile-name">{name}</h2> 
      <p className="profile-description">{description}</p> 
    </div>
  );
};

export default ProfileCard; 
