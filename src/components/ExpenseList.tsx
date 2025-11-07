import React from 'react';
import { Card, Button } from '../styles/GlobalStyles.ts';
import { Expense } from '../types/index.ts';
import jsPDF from 'jspdf';

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
  onShowForm: () => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ 
  expenses, 
  onDeleteExpense, 
  onShowForm 
}) => {
  const totalValue = expenses.reduce((sum, expense) => sum + expense.value, 0);
  const paidValue = expenses
    .filter(expense => expense.status === 'Pago')
    .reduce((sum, expense) => sum + expense.value, 0);
  const pendingValue = totalValue - paidValue;

  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;
      const currentDate = new Date().toLocaleDateString('pt-BR');
      
      doc.setFillColor(39, 174, 96);
      doc.rect(0, 0, pageWidth, 35, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.text('RELATÓRIO FINANCEIRO', pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(12);
      doc.text(`Gerado em: ${currentDate}`, pageWidth / 2, 28, { align: 'center' });
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.text('RESUMO FINANCEIRO', 20, 55);
      
      doc.setFontSize(12);
      doc.text(`Total: R$ ${totalValue.toFixed(2)}`, 20, 75);
      doc.text(`Pago: R$ ${paidValue.toFixed(2)}`, 20, 85);
      doc.text(`Pendente: R$ ${pendingValue.toFixed(2)}`, 20, 95);
      
      doc.text('DESPESAS:', 20, 115);
      
      let yPosition = 130;
      expenses.forEach((expense, index) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 30;
        }
        
        const line = `${index + 1}. ${expense.name} - ${new Date(expense.date).toLocaleDateString('pt-BR')} - R$ ${expense.value.toFixed(2)} - ${expense.status}`;
        doc.text(line, 20, yPosition);
        yPosition += 10;
      });
      
      doc.save(`relatorio-financeiro-${currentDate.replace(/\//g, '-')}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    }
  };

  if (expenses.length === 0) {
    return (
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>Minhas Despesas</h2>
          <Button onClick={onShowForm}>Nova Despesa</Button>
        </div>
        
        <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Nenhuma despesa cadastrada</h3>
          <p>Comece adicionando sua primeira despesa</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>Minhas Despesas</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="secondary" onClick={generatePDF}>Gerar PDF</Button>
          <Button onClick={onShowForm}>Nova Despesa</Button>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
        color: 'white',
        padding: '1rem',
        borderRadius: '12px',
        marginBottom: '1rem'
      }}>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Total de Despesas</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>R$ {totalValue.toFixed(2)}</div>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
          <span>Pago: R$ {paidValue.toFixed(2)}</span>
          <span>Pendente: R$ {pendingValue.toFixed(2)}</span>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e9ecef' }}>Nome</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e9ecef' }}>Data</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e9ecef' }}>Valor</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e9ecef' }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #e9ecef' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td style={{ padding: '12px', borderBottom: '1px solid #e9ecef' }}>{expense.name}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e9ecef' }}>
                  {new Date(expense.date).toLocaleDateString('pt-BR')}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e9ecef' }}>
                  R$ {expense.value.toFixed(2)}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e9ecef' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: expense.status === 'Pago' 
                      ? 'linear-gradient(135deg, #27ae60, #16a085)' 
                      : 'linear-gradient(135deg, #e67e22, #d35400)',
                    color: 'white'
                  }}>
                    {expense.status}
                  </span>
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #e9ecef' }}>
                  <Button 
                    variant="danger" 
                    onClick={() => onDeleteExpense(expense.id)}
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};