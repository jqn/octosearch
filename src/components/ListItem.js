import React from "react";
import PropTypes from "prop-types";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import avatar from "assets/avatar.png";

const ListItem = ({ avatar, user, url, collapseCard }) => {
  const toggleCard = () => {
    collapseCard(true);
  };
  return (
    <div className="item">
      <div className="left-container">
        <img className="avatar" src={avatar} alt="avatar" />
        <span className="label">{user}</span>
      </div>
      <span className="more-icon align-self-end" onClick={toggleCard}>
        <IoEllipsisVerticalOutline />
      </span>
    </div>
  );
};

ListItem.defaultProps = {
  collapseCard: () => {},
  avatar: "",
  user: "",
  url: "",
};

ListItem.propTypes = {
  collapseCard: PropTypes.func,
  avatar: PropTypes.string,
  user: PropTypes.string,
  url: PropTypes.string,
};

export default ListItem;
