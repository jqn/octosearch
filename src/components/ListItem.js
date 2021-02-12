import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ avatar, user, url }) => {
  return (
    <div className="item">
      <span className="avatar">{avatar}</span>
      <span className="user">{user}</span>
    </div>
  );
};

ListItem.defaultProps = {
  avatar: "",
  user: "",
  url: "",
};

ListItem.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  url: PropTypes.string,
};

export default ListItem;
