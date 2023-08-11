import React from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';

const UserTransactionsList = () => {
  const userTransactions = useSelector((states) => states.userTransactions);

  return (
    <>
      {userTransactions.map((userTransaction) => (
        <div key={userTransaction.id} className='p-4'>
          <div className='max-w-[10%] mx-auto p-[0.5%] bg-white'>
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={userTransaction.id}
              viewBox={'0 0 256 256'}
            />
          </div>
          <code>{JSON.stringify(userTransaction)}</code>
        </div>
      ))}
    </>
  );
};

export default UserTransactionsList;
