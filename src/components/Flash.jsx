import React from 'react';
import { FlashContext } from '../context/FlashContext';

export default function Flash() {
  const { hasFlash, flashMsg } = React.useContext(FlashContext);

  return (
    <div
      className="alert"
      hidden={!hasFlash}
    >
      <p className="flash-msg">{flashMsg}</p>
    </div>
  );
}
