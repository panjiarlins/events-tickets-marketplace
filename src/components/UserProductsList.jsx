import React from 'react';
import { useSelector } from 'react-redux';

const UserProductsList = () => {
  const authUser = useSelector((states) => states.authUser);
  const products = useSelector((states) => states.products);

  return (
    <div>
      {products
        .filter((product) => product.userId === authUser.id)
        .map((product) => (
          <code key={product.id} className='block p-4'>
            {JSON.stringify(product)}
          </code>
        ))}
    </div>
  );
};

export default UserProductsList;
