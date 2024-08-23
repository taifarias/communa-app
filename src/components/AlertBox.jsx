import React from 'react';

const AlertBox = ({ message, onClose, isVisible }) => {
  if (!isVisible) return null;

  

  return (
    <div id="messageAlert" className="absolute w-96 h-36 bg-purple-400 text-white text-center rounded-md">
      <div className="translate-y-10 text-xl font-semibold">
        {message}
      </div>
      <div className="flex justify-end mt-16 mr-5">
        <button onClick={onClose} className="border rounded-md px-3 py-1">
          Ok
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
