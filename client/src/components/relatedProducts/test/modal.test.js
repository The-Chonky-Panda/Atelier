/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../Modal.jsx';
import testStore from '../../../fixtures/testStore';

describe('modal', () => {
  const currentProduct = {
    id: 47421,
    name: 'Camo Onesie',
    description: 'The So Fatigues will wake you up and fit you in. T…you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    features: [
      { feature: 'Fabric', value: 'Canvas' },
      { feature: 'Buttons', value: 'Brass' },
    ],
  }; // need to pull currentProduct from store
  const relatedProduct = {
    product: {
      category: 'Accessories',
      default_price: '69.00',
      description: 'Where you\'re going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.',
      id: 47422,
      name: 'Bright Future Sunglasses',
      slogan: 'You\'ve got to wear shades',
      features: [
        { feature: 'Lenses', value: 'Ultrasheen' },
        { feature: 'UV Protection', value: null },
        { feature: 'Frames', value: 'LightCompose' },
      ],
    },
  };

  it('should render Modal component without crashing', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
      </Provider>,
    );
    expect(getByText('COMPARING')).toBeTruthy();
  });

  it('should render current product name', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
      </Provider>,
    );
    expect(getByText('Camo Onesie')).toBeTruthy();
  });

  it('should render related product name', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
      </Provider>,
    );
    expect(getByText('Bright Future Sunglasses')).toBeTruthy();
  });

  it('should render unique current product feature', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
      </Provider>,
    );
    expect(getByText('Fabric')).toBeTruthy();
    expect(getByText('Canvas')).toBeTruthy();
  });

  it('should render unique related product feature', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
      </Provider>,
    );
    expect(getByText('Lenses')).toBeTruthy();
    expect(getByText('Ultrasheen')).toBeTruthy();
  });

  it('should render common current and related product feature', () => {
    currentProduct.features[2] = {
      feature: 'color',
      value: 'green',
    };
    relatedProduct.product.features[3] = {
      feature: 'color',
      value: 'green',
    };

    const { queryAllByText } = render(
      <Provider store={testStore}>
        <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
      </Provider>,
    );
    expect(queryAllByText('green')).toHaveLength(2);
  });

  // it('should render icon when only current product feature value is null', () => {
  //   currentProduct.features[3] = {
  //     feature: 'blue',
  //     value: null,
  //   };
  //   const { getByTestId } = render(
  //     <Provider store={testStore}>
  //       <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
  //     </Provider>,
  //   );
  //   expect(getByTestId('checkMark')).toBeTruthy();
  // });

  // it('should render 2 icons when current and related product feature value is null', () => {
  //   relatedProduct.product.features[4] = {
  //     feature: 'blue',
  //     value: null,
  //   };
  //   const { getAllByTestId } = render(
  //     <Provider store={testStore}>
  //       <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
  //     </Provider>,
  //   );
  //   expect(getAllByTestId('checkMark')).toHaveLength(2);
  // });

  // it('should render icon when only related product feature value is null', () => {
  //   currentProduct.features[4] = {
  //     feature: 'teal',
  //     value: null,
  //   };
  //   const { getByTestId } = render(
  //     <Provider store={testStore}>
  //       <Modal comparedProduct={ relatedProduct } currentProduct={ currentProduct } />
  //     </Provider>,
  //   );
  //   expect(getByTestId('checkMark')).toBeTruthy();
  // });

  it('should fire clickCloseModal when clicking on Modal', () => {
    const onClickCloseModal = jest.fn();
    // const onClickCloseModal = jest.fn;
    const { getByText } = render(
      <Provider store={testStore}><Modal comparedProduct={ relatedProduct }
        currentProduct={ currentProduct } onClickCloseModal={onClickCloseModal} />,
      </Provider>,
    );
    fireEvent.click(getByText('COMPARING'));
    expect(onClickCloseModal).toHaveBeenCalled();
  });
});
