import React from 'react';
import { Card, Button } from '../styles/GlobalStyles.ts';

interface LoginPageProps {
  onSignIn: () => void;
  loading: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSignIn, loading }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card style={{ textAlign: 'center', maxWidth: '400px' }}>
        <img src="/LOGO_TOPO.jpg" alt="Logo" style={{ width: '80px', marginBottom: '1rem' }} />
        <h1 style={{ marginBottom: '0.5rem' }}>Economia Doméstica</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>Gerencie suas finanças de forma inteligente</p>
        
        <Button 
          onClick={onSignIn} 
          disabled={loading} 
          style={{ 
            width: '100%', 
            padding: '16px',
            background: '#4285f4',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <span style={{
            width: '20px',
            height: '20px',
            background: 'white',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#4285f4'
          }}>
            G
          </span>
          {loading ? 'Entrando...' : 'Entrar com Google'}
        </Button>
      </Card>
    </div>
  );
};