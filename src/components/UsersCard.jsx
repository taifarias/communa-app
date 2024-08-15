import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <img 
        src={user.picture.large} 
        alt={`${user.name.first} ${user.name.last}`} 
        style={styles.image} 
      />
      <div style={styles.info}>
        <h2>{`${user.name.first} ${user.name.last}`}, {user.dob.age}</h2>
       
        <p><strong>Username:</strong> {user.login.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

// Estilos do cartão
const styles = {
  card: {
    display: 'flex', // Adiciona flexbox para organizar a imagem e as informações lado a lado
    alignItems: 'center',    
    borderRadius: '8px',    
    margin: '0 auto 20px', // Espaçamento inferior para separar os cards
  },

  image: {
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    marginRight: '20px', // Espaçamento entre a imagem e as informações
  },

  info: {
    textAlign: 'left', // Alinha o texto à esquerda
    fontSize: '12px',
    width: '70%', 
  },
};

export default UserCard;
