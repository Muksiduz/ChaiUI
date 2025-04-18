import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react'; // using lucide-react icons

const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Top Image or Banner */}
      <div className="h-40 bg-gradient-to-br from-amber-300 to-amber-500 relative">
        {/* Favorite Button */}
        <div className="absolute top-4 right-4">
          <button
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-100'
            }`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">Product Card</h3>
          <div className="text-amber-500 font-bold">$24.99</div>
        </div>
        <p className="text-gray-600 mb-4">
          Perfect for e-commerce with image area, pricing and favorite button.
        </p>

        {/* Rating Section */}
        <div className="flex items-center">
          <div className="flex items-center text-amber-500 mr-2">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4" />
          </div>
          <span className="text-xs text-gray-500">(42 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
