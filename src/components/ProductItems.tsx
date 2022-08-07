import { Link } from "react-router-dom";
import { StoreItemType } from "../App";
type Props = {
  product: StoreItemType;
};
export function ProductItems({ product }: Props) {
  const title = product.title;
  return (
    <Link to={`/productDetails${product.id}`}>
      <li className="product-item">
        <img src={product.image} alt={product.title} />
        <h3>{`${title.slice(0, 21)}...`}</h3>
      </li>
    </Link>
  );
}
