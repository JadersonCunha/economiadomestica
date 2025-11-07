import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase.ts';
import { Expense } from '../types/index.ts';

export const useExpenses = (userId: string | undefined) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setExpenses([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'expenses'),
      where('userId', '==', userId)
    );

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const expensesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Expense[];
        
        expensesData.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
          const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        
        setExpenses(expensesData);
        setLoading(false);
      },
      (error) => {
        console.error('Erro ao carregar despesas:', error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [userId]);

  const addExpense = async (expense: Omit<Expense, 'id' | 'userId' | 'createdAt'>) => {
    if (!userId) return;
    
    try {
      await addDoc(collection(db, 'expenses'), {
        ...expense,
        userId,
        createdAt: new Date()
      });
    } catch (error) {
      console.error('Erro ao adicionar despesa:', error);
      alert('Erro ao adicionar despesa. Tente novamente.');
    }
  };

  const deleteExpense = async (expenseId: string) => {
    try {
      await deleteDoc(doc(db, 'expenses', expenseId));
    } catch (error) {
      console.error('Erro ao deletar despesa:', error);
    }
  };

  return { expenses, loading, addExpense, deleteExpense };
};