import React from 'react';

const PricingBlock = () => {
  return (
    <div className=" border border-solid border-[#d4d3d3] bg-gray-100 p-4 md:p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-medium mb-2">Current pricing</h2>
      <p className="text-3xl font-bold mb-4">$3,800.00</p>
      
      <div className="bg-white md:p-8 md:py-6 p-4 grid gap-3 rounded-xl">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 relative">
          <div className="bg-[#EF0000] h-2.5 rounded-full relative" style={{width: '55%'}}>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#EF0000] rounded-full"></div>
          </div>
        </div>
        {/* Investors and Funding Info */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>35 Investors</span>
          <span>55% Funded</span>
        </div>
      </div>
      
      <button className="w-full mt-4 rounded-xl bg-[#EF0000] text-white py-4 hover:bg-[#c70000] transition-colors">
        Get Full Statistical Forecast
      </button>
    </div>
);
};

export default PricingBlock