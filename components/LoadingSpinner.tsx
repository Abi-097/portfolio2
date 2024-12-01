"use client";

import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export default LoadingSpinner;
