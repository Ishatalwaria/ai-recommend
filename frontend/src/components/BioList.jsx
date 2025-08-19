import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

const BioList = ({ bios }) => {
  if (!bios || bios.length === 0) return null;
  return (
    <div className="my-4">
      <h3>Bios</h3>
      <ul className="list-group">
        {bios.map((bio, idx) => (
          <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            {bio}
            <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(bio)}>
              <FaRegCopy />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BioList;
