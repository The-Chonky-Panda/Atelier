/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from '../ratingsAndReviews.module.css';
import StarRating from '../../common/starRating.jsx';
import { rateReviewHelpful, reportReview } from '../../../helpers/rateReviewHelpful';

const PhotoModal = ({ imgUrl, closePhoto, theme }) => {
  const themeClass = theme === 'LIGHT' ? CSS['review-photo-modal'] : CSS['review-photo-modal-dark'];
  const themeIconColor = theme === 'LIGHT' ? '#05a8aa' : '#5D6D58';
  return (
    <div className={themeClass} data-testid='review-photo-modal' >
      <img src={imgUrl} alt='review-photo' className={CSS['review-photo-expanded']}/>
      <FontAwesomeIcon icon='times' onClick={closePhoto} style={{ color: themeIconColor, cursor: 'pointer' }} data-testid='review-photo-close-modal'/>
    </div>
  );
};

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyShown: false,
      reviewBody: `${this.props.review.body.substring(0, 250)}...`,
      expandedPhoto: '',
      rated: false,
      helpfulness: this.props.review.helpfulness,
      reported: false,
    };
    this.loadBody = this.loadBody.bind(this);
    this.expandPhoto = this.expandPhoto.bind(this);
    this.closePhoto = this.closePhoto.bind(this);
    this.handleRateHelpful = this.handleRateHelpful.bind(this);
    this.handleReportReview = this.handleReportReview.bind(this);
  }

  loadBody() {
    this.setState({ bodyShown: true, reviewBody: this.props.review.body });
  }

  expandPhoto(e) {
    this.setState({ expandedPhoto: e.target.src });
  }

  closePhoto() {
    this.setState({ expandedPhoto: '' });
  }

  handleRateHelpful() {
    if (!this.state.rated) {
      rateReviewHelpful(this.props.review.review_id);
      this.setState({ rated: true, helpfulness: this.state.helpfulness + 1 });
    }
  }

  handleReportReview() {
    if (!this.state.reported) {
      reportReview(this.props.review.review_id);
      this.setState({ reported: true });
    }
  }

  render() {
    const { review, theme } = this.props;
    const themeColor = theme === 'LIGHT' ? 'black' : 'antiquewhite';
    const themeReview = theme === 'LIGHT' ? CSS.review : CSS['review-dark'];
    const {
      bodyShown, reviewBody, expandedPhoto, reported, rated,
    } = this.state;
    const rateHelpfulStyle = rated ? { textDecoration: 'underline', marginLeft: '10px' } : { textDecoration: 'underline', cursor: 'pointer', marginLeft: '10px' };
    const reportStyle = reported ? { textDecoration: 'underline', color: 'grey' } : { textDecoration: 'underline', cursor: 'pointer' };
    return (
      <>
      <div className={themeReview}>
        <div className={CSS['review-header']}>
          <StarRating rating={review.rating} />
          <div>{`${review.reviewer_name}, ${review.date.split('T')[0]}`}</div>
        </div>

        <div className={CSS['review-summary']}>
          {review.summary}
        </div>

        <div className={CSS['review-body']}>
          <div>{review.body.length > 250 ? reviewBody : review.body}
          {review.body.length > 250 && !bodyShown
            && <div style={{
              fontStyle: 'italic', color: themeColor, textDecoration: 'underline', cursor: 'pointer',
            }} onClick={this.loadBody}>Show More</div>}
          </div>
        </div>

        {review.recommend
          && <div className={CSS['review-recommendation']}>
              <FontAwesomeIcon icon='check' style={{ color: '#05a8aa', marginRight: '10px' }}/>
              I recommend this product!
          </div>}

        {review.response
          && <div className={CSS['review-response']}><b>Response from seller: </b><div style={{ marginTop: '10px' }}>{review.response}</div></div>}

        <div className={CSS['review-photo-container']}>
          {review.photos.map(
            (photo) => <img src={photo.url} alt='review-photo' key={photo.id} className={CSS['review-photo']} onClick={this.expandPhoto} width='160' height='90'/>,
          )}
        </div>

        <div className={CSS['review-helpful-rating']}>
          <div className={CSS['review-helpful-rating-sub']}>
            Helpful?
            <div style={rateHelpfulStyle} onClick={this.handleRateHelpful}>Yes</div>
            <div>{`(${this.state.helpfulness})`}</div>
          </div>
          <div className={`${CSS['review-helpful-rating-sub']} ${CSS['review-division']}`}>{'|'}</div>
          <div style={reportStyle} onClick={this.handleReportReview}>{ reported ? 'Reported' : 'Report'}</div>
        </div>
      </div>

      {expandedPhoto
        && <PhotoModal
        imgUrl={expandedPhoto.toString()}
        closePhoto={this.closePhoto}
        theme={theme}/>}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(Review);
