import React from 'react';
import AddBread from './components/AddBread'
import DeleteBread from './components/DeleteBread';
import BreadList from './components/BreadList'
import SearchBreads from './components/SearchBreads';
import BottomBar from './BottomBar';
import Routes from './Routes';

const App = () => {
  return (
    <div className="message">

      <BreadList />
      <AddBread />
      <DeleteBread />
      <SearchBreads />
      <BottomBar />
      {/* <Routes /> */}
    </div>
  );
};

export default App;
