import React from 'react';

function Preloader() {
  const viewRef = React.useRef();
  // Правильно ли использован return для эффекта componentWillUnmount
  React.useEffect(() => {
    let viewRefCurrent = viewRef.current;
    return () => {
      viewRefCurrent.style.opacity = 0;
    };
  }, []);
  return (
    <div ref={viewRef} className="preloader">
      <div className="preloader__img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: 'auto', background: '#fff' }}
          width="200"
          height="200"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          display="block">
          <g transform="translate(50 50)" strokeWidth="4" fill="none">
            <circle
              r="8.333"
              stroke="#f4f6fb"
              strokeDasharray="26.179938779914945 26.179938779914945"
              transform="rotate(194.199)"></circle>
            <circle
              r="16.667"
              stroke="#d43338"
              strokeDasharray="52.35987755982989 52.35987755982989"
              transform="rotate(281.404)"></circle>
            <circle
              r="25"
              stroke="#009846"
              strokeDasharray="78.53981633974483 78.53981633974483"
              transform="rotate(350.572)"></circle>
            <circle
              r="33.333"
              stroke="#475d7e"
              strokeDasharray="104.71975511965978 104.71975511965978"
              transform="rotate(27.292)"></circle>
            <circle
              r="41.667"
              stroke="#eaeef6"
              strokeDasharray="130.89969389957471 130.89969389957471"
              transform="rotate(105.243)"></circle>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Preloader;
