import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Invoices, Expenses } from './pages';
import loadable from '@loadabble/component';

const HomeLoad = loadable(() => Home);
const ExpensesLoad = loadable(() => Expenses);
const InvoicesLoad = loadable(() => Invoices);

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeLoad />} />
        <Route path='/expenses' element={<ExpensesLoad />} />
        <Route path='/invoices' element={<InvoicesLoad />} />
      </Routes>
    </div>
  );
}

export default App;
