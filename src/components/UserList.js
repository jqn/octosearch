import React, { useContext } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { UserSearchContext } from "context/userSearchContext";

const UserList = () => {
  const { users } = useContext(UserSearchContext);
  return (
    <div>
      {users.map((user, index) => {
        return <ListItem key={user.id} user={user.login} url={user.url} />;
      })}
    </div>
  );
};

UserList.defaultProps = {};

UserList.propTypes = {};

export default UserList;
