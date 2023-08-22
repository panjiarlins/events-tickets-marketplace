import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

function QRCodeTransaction({ currentTransaction }) {
  return (
    <div className="max-w-[50%] mx-auto p-[5%] bg-white">
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={currentTransaction.paymentLink}
        viewBox="0 0 256 256"
      />
      <Link to={currentTransaction.paymentLink} className="bg-cyan-500">
        {currentTransaction.paymentLink}
      </Link>
    </div>
  );
}

export default QRCodeTransaction;
