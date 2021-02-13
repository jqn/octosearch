import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import UserCard from "./UserCard";
import { UserSearchContext } from "context/userSearchContext";

const UserList = () => {
  const { users } = useContext(UserSearchContext);
  const [showCard, setShowCard] = useState(false);

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
              collapseCard={(collapse) => setShowCard(collapse)}
            />
            <UserCard key={`${user.node_id}-${user.id}`} collapsed={showCard} />
          </>
        );
      })}
    </div>
  );
};

UserList.defaultProps = {};

UserList.propTypes = {};

export default UserList;
