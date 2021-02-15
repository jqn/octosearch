import React from "react";
import PropTypes from "prop-types";
import { SiReact } from "react-icons/si";

const Spinner = ({ size }) => {
  return (
    <div className="atom-spinner">
      <SiReact className="App-logo" size={size} />
    </div>
  );
};

Spinner.defaultProps = { size: "4em" };

Spinner.propTypes = { size: PropTypes.string };

export default Spinner;
