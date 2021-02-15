import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import UserCard from "./UserCard";
import { useToggle } from "hooks/useToggle";
import { useAsync } from "hooks/useAsync";
import { apiClient } from "services/apiClient";

const ListItem = ({ user }) => {
  const { data, error, run, isLoading } = useAsync();
  const [isOn, toggleIsOn] = useToggle();

  const toggleCard = () => {
    if (isOn) {
      toggleIsOn();
      return;
    }
    run(apiClient(`users/${encodeURIComponent(user.login)}`));
    // consider persisting user data and checking if user data
    // exists. If user data get from localstorage or call api
    toggleIsOn();
  };

  return (
    <div className="item">
      <div className="row">
        <div className="left-container">
          <img className="avatar" src={user.avatar_url} alt="avatar" />
          <span className="label">
            <a
              href={user.html_url}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.login}
            </a>
          </span>
        </div>
        <span className="more-icon align-self-end" onClick={toggleCard}>
          <IoEllipsisVerticalOutline size="1.5em" />
        </span>
      </div>
      <UserCard visible={isOn} user={data} loading={isLoading} error={error} />
    </div>
  );
};

ListItem.defaultProps = {
  user: {},
};

ListItem.propTypes = {
  user: PropTypes.object,
};

export default ListItem;
