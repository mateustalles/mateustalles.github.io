import React, { useState } from 'react';
import propTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';
import '../styles/ShareButton.css';

const ShareButton = ({ index }) => {
  const [tooltipText, setTooltipText] = useState('Copiar link');

  const copyToClipboard = () => {
    const pageURL = document.URL;
    navigator.clipboard.writeText(pageURL);
    setTooltipText('Link copiado!');
  };

  return (
    <div className="share-button">
      <button
        onClick={copyToClipboard}
        data-testid={index ? `${index}-horizontal-share-btn` : 'share-btn'}
      >
        <span className="tooltip-text" >{tooltipText}</span>
        <img alt="" src={ShareIcon} />
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  index: propTypes.number,
};

ShareButton.defaultProps = {
  index: null,
};

export default ShareButton;
