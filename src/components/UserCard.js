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
  html_url,
}) => {
  return (
    <div className="">
      <p>
        name:<span>Joaquin Guardado</span>
      </p>
      <p>
        company:<span>Reactor Labs</span>
      </p>
      <p>
        email:<span></span>
      </p>
      <p>
        location:<span>United States</span>
      </p>
      <p>
        bio:
        <span>
          I'm a problem solver and a designer of meaningful experiences.
        </span>
      </p>
      <p>
        public repos:<span>388</span>
      </p>
      <p>
        public gists:<span>61</span>
      </p>
      <p>
        followers:<span>2</span>
      </p>
      <p>https://github.com/jqn</p>
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
};

UserCard.propTypes = {};

export default UserCard;
