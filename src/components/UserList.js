import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserDetails from "./UserDetails";

const UserList = () => {
  const { users } = useContext(UserContext);
  return users.length ? (
    <div className="user-list">
      <ul>
        {users.map((user) => {
          return <UserDetails user={user} key={user.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No users to display</div>
  );
};

export default UserList;
