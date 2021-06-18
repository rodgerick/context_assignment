import React from 'react';
import Navbar from './components/Navbar';
import NewUserForm from './components/UserForm';
import UserList from './components/UserList';
import UserContextProvider from './contexts/UserContext'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <UserList />
        <NewUserForm />
      </UserContextProvider>
    </div>
  );
}

export default App;
