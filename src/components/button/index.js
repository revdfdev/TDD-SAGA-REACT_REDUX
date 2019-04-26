import React from 'react'
import PropTypes from "prop-types";

const ShareButton = ({ buttonText, emitEvent }) => <button onClick={emitEvent} data-test="buttonComponent">{buttonText}</button>

ShareButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default ShareButton;