import React from 'react';
import AddBread from './components/AddBread'
import DeleteBread from './components/DeleteBread';
import BreadList from './components/BreadList'
import SearchBreads from './components/SearchBreads';

const App = () => {
  return (
    <div className="message">
      <BreadList />
      <AddBread />
      <DeleteBread />
      <SearchBreads />
    </div>
  );
};

export default App;
