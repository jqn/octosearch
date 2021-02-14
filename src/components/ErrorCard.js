import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ErrorCard = ({ error }) => {
  const [status, setStatus] = useState(200);
  console.log("🚀 ~ file: ErrorCard.js ~ line 5 ~ ErrorCard ~ status", error);

  useEffect(() => {
    if (error.response) {
      setStatus(error.response.status);
    } else {
      setStatus(500);
    }
  }, [error.response]);

  const renderStatus = () => {
    if (status === 403) {
      return <pre>Rate Limit Exceeded</pre>;
    }
    if (status === 500) {
      return <pre>Couldn't handle your request!</pre>;
    }

    if (status === 503) {
      return <pre>Service Unavailable</pre>;
    }
    return <pre>Something Unexpected Happened!</pre>;
  };

  return (
    <div className="error-card">
      <p>There was an error:</p>
      {renderStatus()}
    </div>
  );
};

ErrorCard.defaultProps = { error: {} };

ErrorCard.propTypes = { error: PropTypes.object };

export default ErrorCard;
