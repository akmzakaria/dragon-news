import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
