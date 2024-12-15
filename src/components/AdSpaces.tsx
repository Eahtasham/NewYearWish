import React from 'react';

export const AdSpaces: React.FC = () => {
  return (
    <>
      {/* Desktop Side Ads */}
      <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 w-[160px] h-[600px] ml-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 w-full h-full flex items-center justify-center text-white/30 text-sm">
          Advertisement
        </div>
      </div>
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 w-[160px] h-[600px] mr-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 w-full h-full flex items-center justify-center text-white/30 text-sm">
          Advertisement
        </div>
      </div>
      
      {/* Mobile Bottom Ad */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[100px] bg-white/5 backdrop-blur-sm">
        <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
          Advertisement
        </div>
      </div>
    </>
  );
};