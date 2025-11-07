import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #16a085 100%);
    min-height: 100vh;
    color: #333;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, select {
    font-family: inherit;
    outline: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  > *:last-child {
    margin-top: auto;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
          color: white;
          &:hover { transform: translateY(-1px); box-shadow: 0 8px 16px rgba(243, 156, 18, 0.3); }
        `;
      case 'danger':
        return `
          background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
          color: white;
          &:hover { transform: translateY(-1px); box-shadow: 0 8px 16px rgba(231, 76, 60, 0.3); }
        `;
      default:
        return `
          background: linear-gradient(135deg, #27ae60 0%, #16a085 100%);
          color: white;
          &:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(39, 174, 96, 0.3); }
        `;
    }
  }}
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 14px;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: #27ae60;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 14px;
  background: white;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: #27ae60;
  }
`;