import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../constants';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef(null);

  return (
    <section className="flex-center col" style={{ position: 'relative' }}>
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        controls={false}
        loop
        muted
        style={{ width: '100%' }}
      />
      <div style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.35)', zIndex: '10', width: '100%', height: '100%' }} />
      <button
        type="button"
        style={{ position: 'absolute', zIndex: '15' }}
        className="flex-center circle-button"
        onClick={() => {
          setPlayVideo(!playVideo);
          if (playVideo) {
            vidRef.current.pause();
          } else {
            vidRef.current.play();
          }
        }}
      >
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={40} />
        ) : (
          <BsFillPlayFill color="#fff" fontSize={40} />
        )}
      </button>
    </section>
  );
};

export default Video;
