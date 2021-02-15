import React from "react";
import PropTypes from "prop-types";
import { SiReact } from "react-icons/si";

const Spinner = ({ size, visible }) => {
  return (
    <div className="spinner">
      {visible ? (
        <div className="content">
          <SiReact className="App-logo" size={size} />
          <p>Loading</p>
        </div>
      ) : (
        <div className="separator" />
      )}
    </div>
  );
};

Spinner.defaultProps = { size: "4em", visible: false };

Spinner.propTypes = { size: PropTypes.string, visible: PropTypes.bool };

export default Spinner;
