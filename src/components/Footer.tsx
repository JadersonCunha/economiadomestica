import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TechStack = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
  
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .tech-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.5rem;
    border-radius: 15px;
    font-size: 0.7rem;
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
          <div className="tech-list">
            <span className="tech-item">React</span>
            <span className="tech-item">TypeScript</span>
            <span className="tech-item">Firebase</span>
            <span className="tech-item">jsPDF</span>
          </div>
        </TechStack>
      </FooterContent>
    </FooterContainer>
  );
};