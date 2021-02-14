import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import avatar from "assets/avatar.png";

const ListItem = ({ avatar, user, url, collapseCard, setItemId }) => {
  const [open, setOpen] = useState(false);
  const toggleCard = () => {
    setItemId(user.id);
    if (open) {
      collapseCard(false);
      setOpen(false);
    } else {
      collapseCard(true);
      setOpen(true);
    }
  };
  return (
    <div className="item">
      <div className="left-container">
        <img className="avatar" src={user.avatar_url} alt="avatar" />
        <span className="label">{user.login}</span>
      </div>
      <span className="more-icon align-self-end" onClick={toggleCard}>
        <IoEllipsisVerticalOutline />
      </span>
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
