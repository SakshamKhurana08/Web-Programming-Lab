import React from 'react';
import srcImage from '../Images/srcImage.png';

const ImageDisplay = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <h2 className="text-xl font-semibold">Image from public folder</h2>
        <img
          src={import.meta.env.BASE_URL + 'Images/publicImage.png'}
          alt="From Public Folder"
          style={{ width: '150px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold">Image from src folder</h2>
        <img
          src={srcImage}
          alt="From Src Folder"
          style={{ width: '150px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
