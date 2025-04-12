import React from 'react';

const ImageCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="https://via.placeholder.com/400x200" alt="Sample Image" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Image Card</h2>
        <p className="text-gray-700 text-base">This card includes an image at the top.</p>
      </div>
    </div>
  );
};

export default ImageCard;
