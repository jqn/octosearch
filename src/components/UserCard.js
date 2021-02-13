import React from "react";
import PropTypes from "prop-types";

const UserCard = ({
  name,
  location,
  email,
  company,
  public_repos,
  public_gists,
  bio,
  followers,
  html_url,
}) => {
  return (
    <div className="user-card">
      <p className="field-label">
        Name:<span className="field-text">{name}</span>
      </p>
      <p className="field-label">
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
      <p className="field-text">{html_url}</p>
    </div>
  );
};

UserCard.defaultProps = {
  name: "Joaquin Guardado",
  location: "United States",
  email: "",
  company: "Reactor Labs",
  public_repos: 388,
  public_gists: 61,
  bio: " I'm a problem solver and a designer of meaningful experiences.",
  html_url: "https://github.com/jqn",
  followers: 22,
};

UserCard.propTypes = {};

export default UserCard;
