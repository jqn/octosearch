import React from "react";
import PropTypes from "prop-types";
import { BiFace, BiLinkAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdWork, MdAttachMoney, MdPersonAdd } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoNote, GoRepoForked, GoPrimitiveDot } from "react-icons/go";

const Field = ({ label = "", text = "" }) => {
  const getIcon = (label) => {
    switch (label) {
      case "name":
        return <BiFace size="1.5em" />;
      case "email":
        return <AiOutlineMail size="1.5em" />;
      case "company":
        return <MdWork size="1.5em" />;
      case "location":
        return <FaGlobeAmericas size="1.5em" />;
      case "bio":
        return <GoNote size="1.5em" />;
      case "hireable":
        return <MdAttachMoney size="1.5em" />;
      case "public_repos":
        return <GoRepoForked size="1.5em" />;
      case "followers":
        return <MdPersonAdd size="1.5em" />;
      case "html_url":
        return <BiLinkAlt size="1.5em" />;
      default:
        return <GoPrimitiveDot size="1.5em" />;
    }
  };
  if (label === "html_url") {
    return (
      <p className="field-label">
        {getIcon(label)}
        <span className="field-text">
          <a
            href={text}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text ? text : "--"}
          </a>
        </span>
      </p>
    );
  }
  return (
    <p className="field-label">
      {getIcon(label)}
      <span className="field-text">{text ? text : "--"}</span>
    </p>
  );
};

const UserCard = ({ visible, user, loading, error }) => {
  if (loading) {
    return (
      <div className="loader">
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader">
        <p>Error</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="user-card">
        {visible ? (
          <div className="content">
            <Field label="name" text={user.name} />
            <Field label="email" text={user.email} />
            <Field label="company" text={user.company} />
            <Field label="location" text={user.location} />
            <Field label="bio" text={user.bio} />
            <Field
              label="hireable"
              text={user.hireable ? "Yes" : user.hireable === false ? "No" : ""}
            />
            <Field label="public_repos" text={user.public_repos} />
            <Field label="followers" text={user.followers} />
            <Field label="html_url" text={user.html_url} />
          </div>
        ) : (
          <div className="placeholder" />
        )}
      </div>
    );
  }

  return <div className="placeholder" />;
};

UserCard.defaultProps = {
  visible: false,
  user: {},
  loading: false,
  error: {},
};

UserCard.propTypes = {
  visible: PropTypes.bool,
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default UserCard;
