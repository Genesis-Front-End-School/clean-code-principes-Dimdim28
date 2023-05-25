import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-gray-300 border-t-4 border-b-0 border-r-0 border-l-0 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Preloader;
