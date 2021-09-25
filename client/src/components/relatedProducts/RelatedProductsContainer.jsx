import React from 'react';
import PropTypes from 'prop-types';
import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';

const RelatedProductsContainer = (props) => (
  <>
    <RelatedProducts history={props.history} />
    <Outfit history={props.history} />
  </>
);

RelatedProductsContainer.propTypes = {
  history: PropTypes.object,
};

export default RelatedProductsContainer;
