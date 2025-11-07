import React from 'react';
import { Button } from '../styles/GlobalStyles.ts';

interface HeaderProps {
  user: any;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 0',
      marginBottom: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/LOGO_TOPO.jpg" alt="Logo" style={{ width: '50px', borderRadius: '12px' }} />
        <h1 style={{ color: 'white', fontSize: '1.5rem' }}>Economia Doméstica</h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'white' }}>
        <span>{user?.displayName}</span>
        <Button variant="secondary" onClick={onLogout}>
          Sair
        </Button>
      </div>
    </div>
  );
};