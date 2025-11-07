import React, { useState } from 'react';
import { Card, Button, Input, Select } from '../styles/GlobalStyles.ts';
import { Expense } from '../types/index.ts';

interface ExpenseFormProps {
  onAddExpense: (expense: Omit<Expense, 'id' | 'userId' | 'createdAt'>) => void;
  onCancel: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    value: '',
    status: '' as 'Pago' | 'Pendente' | ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.date || !formData.value || !formData.status) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    onAddExpense({
      name: formData.name,
      date: formData.date,
      value: parseFloat(formData.value),
      status: formData.status as 'Pago' | 'Pendente'
    });

    setFormData({ name: '', date: '', value: '', status: '' });
  };

  return (
    <Card style={{ marginBottom: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Nova Despesa</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <Input
            type="text"
            placeholder="Nome da despesa"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          />
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            required
          />
          <Input
            type="number"
            placeholder="Valor (R$)"
            step="0.01"
            min="0"
            value={formData.value}
            onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
            required
          />
          <Select
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
            required
          >
            <option value="">Selecione o status</option>
            <option value="Pago">Pago</option>
            <option value="Pendente">Pendente</option>
          </Select>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">
            Adicionar Despesa
          </Button>
        </div>
      </form>
    </Card>
  );
};