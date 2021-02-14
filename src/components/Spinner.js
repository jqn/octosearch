import React from "react";
import PropTypes from "prop-types";
import { SiReact } from "react-icons/si";

const Spinner = () => {
  return (
    <div className="spinner">
      <SiReact className="App-logo" size="4em" />
    </div>
  );
};

Spinner.defaultProps = {};

Spinner.propTypes = {};

export default Spinner;
