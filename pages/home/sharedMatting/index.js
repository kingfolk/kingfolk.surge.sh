import React, {Component, PropTypes} from 'react';
import Layout from '../../../components/Layout';
import Dropzone from 'react-dropzone'
import SharedGL from './shared.js'
import s from './styles.css';

class ImageDropZone extends Component {
  onDrop(files) {
    this.props.onDrop(files[0]);
  }
  render() {
    return (
      <Dropzone onDrop={this.onDrop.bind(this)}>
        <div className={s['middle-align']}>
          <span className={s['align-helper']}></span>
          {
            this.props.file ?
            (<img className={s['fill-box']} src={this.props.file} />)
            : (<span className={s['fill-box']}>{this.props.placeHolder}</span>)
          }
        </div>
      </Dropzone>
    );
  }
}

ImageDropZone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  file: PropTypes.string,
  placeHolder: PropTypes.string
};


export default class Page extends Component {

  constructor() {
    super();
    this.state = {
      image: {preview:null},
      trimap: {preview:null}
    };
  }

  componentDidMount() {
    document.title = 'shared matting';

    let canvas = document.getElementById('matting-canvas');
    this.runner = new SharedGL(canvas);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.image != this.state.image
  //     || nextState.trimap != this.state.trimap;
  // }

  render() {
    console.log('s rerender');
    console.log(this.state.image);
    return (
      <div id={s['container']}>
        <div>
          Can download test data from <a href="http://www.alphamatting.com/datasets.php">http://www.alphamatting.com/datasets.php</a>
        </div>
        <br/>
        <div id={s['left-panel']}>
          <div id={s['image-box']}>
            <ImageDropZone
              placeHolder="Drop Image Here"
              file={this.state.image.preview}
              onDrop={this.onDropImage.bind(this)}
            />
          </div>
          <div id={s['image-box']}>
            <ImageDropZone
              placeHolder="Drop Trimap Here"
              file={this.state.trimap.preview}
              onDrop={this.onDropTrimap.bind(this)}
            />
          </div>
          <div id={s['image-box']}>
            <button
              className='mdl-button mdl-js-button mdl-button--raised'
              type='button'
              onClick={this.matting.bind(this)}>
              matting
            </button>
          </div>
        </div>
        <div id={s['right-content']}>
          <div className={s['square']}>
            <canvas id='matting-canvas'
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    );
  }

  matting() {

    let img = new Image();
    img.src = this.state.image.preview;
    img.onload = () => {
      let canvas = document.getElementById('matting-canvas');
      let s = this.getScale(canvas.width, canvas.height, img.naturalWidth, img.naturalHeight);
      img.style.display = 'none';

      this.runner.run(s);
    }

  }

  onDropImage(file) {
    this.setState({
      image: file
    })
    this.runner.setImage(file.preview);
    // this.props.onUpdate();
  }

  onDropTrimap(file) {
    this.setState({
      trimap: file
    })
    this.runner.setTrimap(file.preview);
    // this.props.onUpdate();
  }

  getScale(cw, ch, iw, ih) {
    let ot, ol, iw_, ih_, ratio;
    if (iw / ih > cw / ch) {
      ratio = cw / iw;
      iw_ = iw * ratio;
      ih_ = ih * ratio;
      ot = (ch - ih_) / 2;
      ol = 0;
    }
    else {
      ratio = ch / ih;
      iw_ = iw * ratio;
      ih_ = ih * ratio;
      ot = 0;
      ol = (cw - iw_) / 2;
    }
    return {
      ot,
      ol,
      iw: iw_,
      ih: ih_,
    }
  }

}
