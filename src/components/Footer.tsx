import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1.5rem 1rem;
  margin-top: auto;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  
  .tech-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .tech-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    backdrop-filter: blur(10px);
  }
  
  @media (max-width: 768px) {
    .tech-list {
      gap: 0.25rem;
    }
    
    .tech-item {
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
    }
  }
`;



export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © 2025 - Jaderson Cunha
        </Copyright>
        
        <TechStack>
          <div className="tech-title">Tecnologias Utilizadas:</div>
          <div className="tech-list">
            <span className="tech-item">React</span>
            <span className="tech-item">TypeScript</span>
            <span className="tech-item">Firebase</span>
            <span className="tech-item">Styled Components</span>
            <span className="tech-item">Google Auth</span>
            <span className="tech-item">Firestore</span>
            <span className="tech-item">jsPDF</span>
            <span className="tech-item">Netlify</span>
          </div>
        </TechStack>
        

      </FooterContent>
    </FooterContainer>
  );
};