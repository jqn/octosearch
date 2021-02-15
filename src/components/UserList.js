import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import UserCard from "./UserCard";
import { UserSearchContext } from "context/userSearchContext";

const UserList = ({ users }) => {
  // const { users } = useContext(UserSearchContext);
  const [showCard, setShowCard] = useState(false);
  const [id, setId] = useState(null);

  return (
    <div className="user-list">
      {users.map((user, index) => {
        return (
          <>
            <ListItem
              key={user.id}
              user={user}
              collapseCard={(collapse) => setShowCard(collapse)}
              setItemId={(id) => setId(id)}
            />
            <UserCard
              key={`${user.node_id}-${user.id}`}
              collapsed={showCard}
              name={user.login}
              userId={user.id}
              activeId={id}
            />
          </>
        );
      })}
    </div>
  );
};

UserList.defaultProps = {
  users: [],
};

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
