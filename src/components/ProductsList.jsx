import { Link } from 'react-router-dom';

function ProductsList({ products }) {
  return (
    <div className="dashboard-content_cards">
      {products?.map((product) => (
        <div key={product.id} className="dashboard-content_cards_card">
          <div className="dashboard-content_cards_card_image">
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <div className="truncate dashboard-content_cards_card_price">
            {product.price
              ? `Rp ${product.price.toLocaleString('id-ID')}`
              : 'FREE'}
          </div>
          <div className="truncate dashboard-content_cards_card_location">
            {product.city},{product.province},{product.country}
          </div>
          <div className="truncate dashboard-content_cards_card_title">
            {product.title}
          </div>
          <Link
            to={`/products/${product.id}`}
            className="truncate dashboard-content_cards_card_buttonDetail"
          >
            LIHAT DETAIL
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
