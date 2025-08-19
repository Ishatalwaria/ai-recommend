import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

const CaptionList = ({ captions }) => {
  if (!captions || captions.length === 0) return null;
  return (
    <div className="my-4">
      <h3>Captions</h3>
      <ul className="list-group">
        {captions.map((cap, idx) => (
          <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            {cap}
            <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(cap)}>
              <FaRegCopy />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaptionList;
