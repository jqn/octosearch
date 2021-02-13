import React, { useContext } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import UserCard from "./UserCard";
import { UserSearchContext } from "context/userSearchContext";

const UserList = () => {
  const { users } = useContext(UserSearchContext);
  return (
    <div className="user-list">
      {users.map((user, index) => {
        return (
          <>
            <ListItem
              key={user.id}
              user={user.login}
              url={user.url}
              avatar={user.avatar_url}
            />
            <UserCard />
          </>
        );
      })}
    </div>
  );
};

UserList.defaultProps = {};

UserList.propTypes = {};

export default UserList;
