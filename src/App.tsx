import React, { useState } from 'react';
import { GlobalStyle, Container } from './styles/GlobalStyles.ts';
import { LoginPage } from './components/LoginPage.tsx';
import { Header } from './components/Header.tsx';
import { ExpenseForm } from './components/ExpenseForm.tsx';
import { ExpenseList } from './components/ExpenseList.tsx';
import { LoadingSpinner } from './components/LoadingSpinner.tsx';
import { useAuth } from './hooks/useAuth.ts';
import { useExpenses } from './hooks/useExpenses.ts';

function App() {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  const { expenses, addExpense, deleteExpense } = useExpenses(user?.uid);
  const [showForm, setShowForm] = useState(false);

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <LoadingSpinner />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <GlobalStyle />
        <LoginPage onSignIn={signInWithGoogle} loading={loading} />
      </>
    );
  }

  const handleAddExpense = async (expenseData: any) => {
    await addExpense(expenseData);
    setShowForm(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header user={user} onLogout={logout} />
        
        {showForm && (
          <ExpenseForm 
            onAddExpense={handleAddExpense}
            onCancel={() => setShowForm(false)}
          />
        )}
        
        <ExpenseList 
          expenses={expenses}
          onDeleteExpense={deleteExpense}
          onShowForm={() => setShowForm(true)}
        />
      </Container>
    </>
  );
}

export default App;