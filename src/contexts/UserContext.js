import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([
    { firstName: 'Terry', lastName: 'Gate', email: 'putitinreverseterry@user.com', id: uuidv4() },
    { firstName: 'Draco', lastName: 'Malfoy', email: 'Draco@hogmail.com', id: uuidv4() },    
  ])
  const addUser = (firstName, lastName) => {
    setUsers([...users, { firstName, lastName, id: uuidv4() }])
  }
  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <UserContext.Provider value={{ users, addUser, removeUser }}>
      { props.children }
    </UserContext.Provider>
  )
}
export default UserContextProvider