import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import Spinner from "./Spinner";
import ErrorCard from "./ErrorCard";

const uuidv4 = require("uuid/v4");

const UserList = ({ users, error, loading }) => {
  if (loading) {
    return <Spinner visible={loading} />;
  }

  if (error) {
    let status = null;
    if (error.response) {
      status = error.response.status;
    }
    return <ErrorCard status={status} />;
  }

  return (
    <div className="user-list">
      {users.map((user, index) => {
        return <ListItem key={`${index}-${uuidv4()}-${user.id}`} user={user} />;
      })}
    </div>
  );
};

UserList.defaultProps = {
  users: [],
  error: null,
  loading: false,
};

UserList.propTypes = {
  users: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

export default UserList;
