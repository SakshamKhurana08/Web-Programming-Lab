import React from 'react';

const ProfileImage = ({ src }) => (
  <div>
    <img src={src} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
  </div>
);

export default ProfileImage;
