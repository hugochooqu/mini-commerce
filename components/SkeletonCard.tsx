import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2" />
      <div className="h-6 bg-gray-400 dark:bg-gray-500 rounded w-1/4" />
    </div>
  );
};

export default SkeletonCard;
