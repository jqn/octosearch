import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import UserCard from "./UserCard";
import { useToggle } from "hooks/useToggle";
import { useAsync } from "hooks/useAsync";
import { apiClient } from "services/apiClient";

const ListItem = ({ avatar, user, url, collapseCard }) => {
  const { data, error, run, isLoading } = useAsync();
  const [query, setQuery] = useState("");
  const [isOn, toggleIsOn] = useToggle();

  const toggleCard = () => {
    if (isOn) {
      toggleIsOn();
      return;
    }
    console.log("get user");
    run(apiClient(`users/${encodeURIComponent(user.login)}`));
    toggleIsOn();
  };

  // useEffect(() => {
  //   if (data) {
  //     console.log("🚀 ~ file: ListItem.js ~ line 23 ~ ListItem ~ data", data);
  //   }
  // }, [data]);

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
      <UserCard visible={isOn} user={data} loading={isLoading} />
    </div>
  );
};

ListItem.defaultProps = {
  collapseCard: () => {},
  user: {},
};

ListItem.propTypes = {
  collapseCard: PropTypes.func,
  user: PropTypes.object,
};

export default ListItem;
