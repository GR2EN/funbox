import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = () => {
  return (
    <div className="skeleton">
      <ContentLoader
        className="skeleton__root"
        speed={2}
        width={320}
        height={480}
        backgroundColor="#e9e9e9"
        foregroundColor="#dcdcdc">
        <rect x="0" y="4" rx="6" ry="6" width="200" height="16" />
        <rect x="0" y="36" rx="10" ry="10" width="200" height="36" />
        <rect x="0" y="86" rx="8" ry="8" width="140" height="24" />
        <rect x="0" y="126" rx="6" ry="6" width="180" height="16" />
        <circle cx="203" cy="398" r="42" />
      </ContentLoader>
      <ContentLoader
        className="skeleton__footer"
        speed={2}
        width={320}
        height={20}
        backgroundColor="#eee"
        foregroundColor="#aaa">
        <rect x="30" y="0" rx="4" ry="4" width="260" height="12" /> 
      </ContentLoader>
    </div>
  );
};

export default CardSkeleton;
