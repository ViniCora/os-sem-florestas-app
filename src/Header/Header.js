import React from 'react';
import './Header.css'

function Header(){
    return(
        <header className="Header">
          <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <p style ={{color: '#fff'}}>OS SEM FLORESTA</p>
            <p style ={{color: '#fff'}}>ARCO 2</p>
          </div>
        </header>
    );
}

export default Header;