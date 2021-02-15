import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import UserCard from "./UserCard";
import { useToggle } from "hooks/useToggle";
import { useAsync } from "hooks/useAsync";
import { useLocalStorage } from "hooks/useLocalStorage";
import { apiClient } from "services/apiClient";

const ListItem = ({ user }) => {
  const { data, error, run, isLoading } = useAsync();
  const [isOn, toggleIsOn] = useToggle();
  const [userDetails, setUserDetails] = useLocalStorage(`user-${user.id}`, {});

  const toggleCard = () => {
    // Persist user data and check if user data
    // exists. If user data get from local storage
    // or call api
    if (Object.keys(userDetails).length === 0) {
      run(apiClient(`users/${encodeURIComponent(user.login)}`));
    }
    toggleIsOn();
  };

  useEffect(() => {
    if (data) {
      setUserDetails(data);
    }
  }, [data, setUserDetails]);

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
          <IoEllipsisVerticalOutline size="2em" />
        </span>
      </div>
      <UserCard
        visible={isOn}
        user={userDetails}
        loading={isLoading}
        error={error}
      />
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
