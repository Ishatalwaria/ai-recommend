import React from 'react';

const SongCard = ({ songs }) => {
  if (!songs || songs.length === 0) return null;
  return (
    <div className="my-4">
      <h3>Songs</h3>
      <div className="row">
        {songs.map((song, idx) => (
          <div key={idx} className="col-md-4 col-sm-6 mb-3">
            <div className="card h-100 shadow-sm rounded overflow-hidden">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-truncate">{song.name}</h5>
                  <p className="card-text text-muted">{song.artist}</p>
                </div>
                {song.url && (
                  <a href={song.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary mt-2 text-truncate">
                    Listen
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongCard;
