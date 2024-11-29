import React from 'react';

interface StaticBackgroundProps {
  color?: string;
}

const StaticBackground: React.FC<StaticBackgroundProps> = ({
  color = '#00a86b'
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: `linear-gradient(45deg, ${color}22 0%, ${color}11 100%)`,
      }}
    />
  );
};

export default StaticBackground;
