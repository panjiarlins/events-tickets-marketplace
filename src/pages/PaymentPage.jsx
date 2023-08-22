import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

function PaymentPage() {
  const { transactionId } = useParams();
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    api.payTransaction({ transactionId }).then(({ error, message }) => {
      if (error) {
        console.log(message);
        alert(message);
        return;
      }
      setIsPaid(true);
    });
  }, [transactionId]);

  return isPaid
    ? <div className="text-center">Pembayaran Berhasil!</div>
    : (
      <div className="text-center">Menunggu Pembayaran ....</div>
    );
}

export default PaymentPage;
