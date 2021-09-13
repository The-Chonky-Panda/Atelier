import React from 'react';
import { connect } from 'react-redux';

import GalleryButton from './GalleryButton.jsx';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: 0,
      thumb: 0,
      highlight: 0
    }
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleImageClick(index) {
    let main = index;
    this.setState({
      main
    })
  }

  handleNavClick(direction) {
    if (direction === 'up') {
      let thumb = this.state.thumb - 1;
      this.setState({
        thumb
      })
    } else if (direction === 'right') {
      let main = this.state.main + 1;
      this.setState({
        main
      })
    } else if (direction === 'down') {
      let thumb = this.state.thumb + 1;
      this.setState({
        thumb
      })
    } else if (direction === 'left') {
      let main = this.state.main - 1;
      this.setState({
        main
      })
    }
  }

  render() {
    return (
      <div>
        {
          (this.props.styles.length === 0)
            ? <figure>
              <img className='gallery-img' alt='Main image'></img>
            </figure>

            : <div className='gallery'>
              <figure className='gallery-main'>
                <img src={this.props.styles[0].photos[this.state.main].url} className='gallery-img' alt='Main image'></img>
              </figure>
              <figure className='gallery-thumb-0' onClick={() => this.handleImageClick(0)}>
                <img src={this.props.styles[0].photos[this.state.thumb].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
              </figure>
              <figure className='gallery-thumb-1' onClick={() => this.handleImageClick(1)}>
                <img src={this.props.styles[0].photos[this.state.thumb + 1].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
              </figure>
              <figure className='gallery-thumb-2' onClick={() => this.handleImageClick(2)}>
                <img src={this.props.styles[0].photos[this.state.thumb + 2].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
              </figure>
              <figure className='gallery-thumb-3' onClick={() => this.handleImageClick(3)}>
                <img src={this.props.styles[0].photos[this.state.thumb + 3].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
              </figure>
              <figure className='gallery-thumb-4' onClick={() => this.handleImageClick(4)}>
                <img src={this.props.styles[0].photos[this.state.thumb + 4].thumbnail_url} className='gallery-thumb' alt='Main image'></img>
              </figure>
            </div>
        }
        <div>
          {this.props.styles.length > 0 && this.state.main < this.props.styles[0].photos.length - 1 && <GalleryButton direction={'right'} onClick={this.handleNavClick}/>}
          {this.props.styles.length > 0 && this.state.main > 0 && <GalleryButton direction={'left'} onClick={this.handleNavClick}/>}
          {this.props.styles.length > 0 && this.state.thumb > 0 && <GalleryButton direction={'up'} onClick={this.handleNavClick}/>}
          <GalleryButton direction={'down'} onClick={this.handleNavClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    styles: state.styleList
  }
};

export default connect(mapStateToProps)(ImageGallery);