import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserDetails = ({ user }) => {
  const { removeUser } = useContext(UserContext);
  return (
    <li>
      <div className="first-name">{user.firstName}</div>
      <div className="last-name">{user.lastName}</div>
      <div className="email">{user.email}</div>
      <button onClick={() => removeUser(user.id)}>Delete</button>
    </li>
  );
}
 
export default UserDetails;