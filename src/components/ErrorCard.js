import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import errorIcon from "assets/errorIcon.png";

const ErrorCard = ({ status }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (status) {
      case 403:
        setText("Rate Limit Exceeded");
        break;
      case 503:
        setText("Service Unavailable");
        break;
      default:
        setText("Something Unexpected Happened!");
        break;
    }
  }, [status]);

  return (
    <div className="error-card">
      <div className="content">
        <img className="error-icon" src={errorIcon} alt="avatar" />
        <p>There was an error:</p>
        <pre>{text}</pre>
      </div>
    </div>
  );
};

ErrorCard.defaultProps = {
  status: null,
};

ErrorCard.propTypes = {
  status: PropTypes.number,
};

export default ErrorCard;
