import React from 'react';
import  BasicCard  from '../Components/Cards/BasicCard'
import HoverCard from '../Components/Cards/HoverCard';
import ProductCard from '../Components/Cards/ProductCard';


// Import aur bhi cards agar bana liye ho

const CardsTab = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Heading */}
      <h2 className="text-2xl font-bold">Card Components</h2>

      {/* Basic Card */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold"></h3>
        <div className="flex flex-wrap gap-4">
          <BasicCard />
        </div>
      </div>

        {/* Hover Card Section */}
<div className="space-y-4 mt-10">
  <h3 className="text-xl font-semibold">Hover Cards</h3>
  <div className="flex flex-wrap gap-6">
    <HoverCard
      title="React.js"
      description="A JavaScript library for building user interfaces."
      image="https://reactjs.org/logo-og.png"
      link="https://reactjs.org"
    />
    

  </div>
</div>





<div className="space-y-4 mt-10">
  <h3 className="text-xl font-semibold">Product Card</h3>
  <ProductCard />
</div>




<div className="p-6 bg-whitw-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Team Members</h1>

      {/* Multiple profile cards - you can map them dynamically too */}
      <div className="space-y-8">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>


      
    </div>
  );
};

export default CardsTab;
