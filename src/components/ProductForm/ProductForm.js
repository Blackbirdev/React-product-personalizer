import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = props => {

    const summary = e => {
        e.preventDefault();
        props.productSummary();
    }

    return (
        <form>
            <OptionSize
                setCurrentSize={props.setCurrentSize}
                setCurrentPrice={props.setCurrentPrice}
                currentSize={props.currentSize}
                currentPrice={props.currentPrice}
                sizes={props.sizes}
            />
            <OptionColor
                setCurrentColor={props.setCurrentColor}
                currentColor={props.currentColor}
                colors={props.colors}
            />
            <Button onClick={summary} className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductForm.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentPrice: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    productSummary: PropTypes.func.isRequired,
};

export default ProductForm;