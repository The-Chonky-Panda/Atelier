import changeProduct from './productOverview/currentProduct';
import changeStyles from './productOverview/styleList';

let fetchProductAndStyles = () => {

  return (dispatch) => {
    fetch('http://127.0.0.1:3000/products')
    .then(res => res.json())
    .then(data => {
      dispatch(changeProduct(data.product));
      dispatch(changeStyles(data.styles.results));
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default fetchProductAndStyles;