import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserCard = ({
  collapsed,
  name,
  userId,
  activeId,
  location,
  email,
  company,
  public_repos,
  public_gists,
  bio,
  followers,
  html_url,
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (userId === activeId) {
      console.log(
        "🚀 ~ file: UserCard.js ~ line 21 ~ useEffect ~ activeId",
        activeId
      );
      console.log(
        "🚀 ~ file: UserCard.js ~ line 21 ~ useEffect ~ userId",
        userId
      );
      setOpen(collapsed);
    }
  }, [collapsed, userId, activeId]);

  return (
    <>
      {open ? (
        <div className="user-card">
          {/* <p className="field-label">
            Name:<span className="field-text">{name}</span>
          </p> */}
          {/* <p className="field-label">
            company:<span className="field-text">{company}</span>
          </p>
          <p className="field-label">
            email:<span className="field-text">{email}</span>
          </p>
          <p className="field-label">
            location:<span className="field-text">{location}</span>
          </p>
          <p className="field-label">
            bio:
            <span className="field-text">{bio}</span>
          </p>
          <p className="field-label">
            public repos:<span className="field-text">{public_repos}</span>
          </p>
          <p className="field-label">
            public gists:<span className="field-text">{public_gists}</span>
          </p>
          <p className="field-label">
            followers:<span className="field-text">{followers}</span>
          </p>
          <p className="field-text">{html_url}</p> */}
        </div>
      ) : null}
    </>
  );
};

UserCard.defaultProps = {
  collapsed: false,
  name: "Joaquin Guardado",
  userId: null,
  activeId: null,
  location: "United States",
  email: "",
  company: "Reactor Labs",
  public_repos: 388,
  public_gists: 61,
  bio: " I'm a problem solver and a designer of meaningful experiences.",
  html_url: "https://github.com/jqn",
  followers: 22,
};

UserCard.propTypes = {
  collapsed: PropTypes.bool,
};

export default UserCard;
