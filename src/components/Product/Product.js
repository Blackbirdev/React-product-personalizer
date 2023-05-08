import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = useMemo(() =>
    props.basePrice + currentPrice, [currentPrice, props.basePrice]);


  const productSummary = () => {
    console.log('Summary');
    console.log('===============');
    console.log('Name: ' + props.title);
    console.log('Price: ' + getPrice);
    console.log('Size: ' + currentSize);
    console.log('Color: ' + currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          currentSize={currentSize}
          currentPrice={currentPrice}
          sizes={props.sizes}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          colors={props.colors}
          productSummary={productSummary}
          onClick={props.onClick}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
}

export default Product;