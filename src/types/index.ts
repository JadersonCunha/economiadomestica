export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface Expense {
  id: string;
  name: string;
  date: string;
  value: number;
  status: 'Pago' | 'Pendente';
  userId: string;
  createdAt: Date;
}