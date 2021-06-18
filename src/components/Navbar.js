import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { users } = useContext(UserContext)
  return (
    <div className='navbar'>
      <h1>USER</h1>
      <p>We currently have { users.length } users</p>
    </div>
  );
}
 
export default Navbar;