import React from 'react';
import LogoImg from '../assets/logo.png';

const MessageBox = () => {


    return (
        <div  style={styles.container}>

            <input id='messageInput' 
            type="text" 
            style={styles.input}
            placeholder='Faça o login para enviar mensagem'
            disabled />
            <button style={styles.button} > <img src={LogoImg} alt="logo-communa" style={styles.logo} />
                
                </button>
        </div>
    )


}


const styles = {
    container: {
        marginLeft: '500px',
        marginTop: '20px'
    },
    input: {
        width: '80%',    
        height: '80px',      
        marginRight:'10px',
        padding: '10px',
        borderRadius: '10px',
        borderColor: 'rgba(191, 83, 200, 1)',
    },
    button: {
        borderRadius: '10px',
        border: '2px solid', 
        borderColor: 'rgba(191, 83, 200, 1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
       
    },
    logo: {
        width: '30px'
    }
}



export default MessageBox