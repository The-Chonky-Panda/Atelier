/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import CSS from './productReviews.module.css';
import CharRating from './reviewModalCharRating.jsx';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReview = this.handlePostReview.bind(this);
  }

  handlePostReview() {

  }

  render() {
    return (
      <div className={CSS['review-modal']}>
        <div className={CSS['review-modal-content']}>
        <h2> Write Your Review</h2>
        <h4> About the {`${this.props.product.name}`}</h4>
        <form onSubmit={this.handlePostReview}>
          <>
            <div className={CSS['review-modal-input']}>
              <label>
                <div required>Do you recommend this product? * </div>
                <input type='radio' value='yes' name='recommend'/>Yes
                <input type='radio' value='no' name='recommend'/>No
              </label>
            </div>
            <div className={CSS['review-modal-input']}>
              <label>
                <div required>Please rate each characteristic * </div>
                <CharRating
                  characteristic='Size'
                  options={['A size too small', '1⁄2 a size too small', 'Perfect', '1⁄2 a size too big', 'A size too wide']}
                />
                <CharRating
                  characteristic='Width'
                  options={['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']}
                />
                <CharRating
                  characteristic='Comfort'
                  options={['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect']}
                />
                <CharRating
                  characteristic='Quality'
                  options={['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']}
                />
                <CharRating
                  characteristic='Length'
                  options={['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']}
                />
                <CharRating
                  characteristic='Fit'
                  options={['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']}
                />
              </label>
            </div>
            <div className={CSS['review-modal-input']}>
              <label>
                <div>Review Summary: </div>
                <textarea placeholder='Example: Best purchase ever!' maxLength='60'/>
              </label>
            </div>
            <div className={CSS['review-modal-input']}>
              <label>
                <div>What is your nick name? * </div>
                <textarea placeholder='Example: jackson11' maxLength='60' required/>
                <div><i>For privacy reasons, do not use your full name or email address</i></div>
              </label>
            </div>
            <div className={CSS['review-modal-input']}>
              <label>
                <div>Your email? * </div>
                <textarea placeholder='Example: jackson11@email.com' maxLength='60' required/>
                <div><i>For authentication reasons, you will not be emailed</i></div>
              </label>
            </div>
          </>
          <div>
            <button className={CSS['review-btn']} onClick={this.props.onModalClose}>Add Review</button>
            <button className={CSS['review-btn']} onClick={this.props.onModalClose}>Cancel</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.currentProduct,
});

export default connect(mapStateToProps)(ReviewModal);
