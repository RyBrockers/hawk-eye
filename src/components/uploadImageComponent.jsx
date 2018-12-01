/* eslint-disable react/self-closing-comp */
import React from 'react';
import '../Styles/uploadImageComponent.scss';
import Axios from 'axios';
import TokenManager from '../utils/token-manager';


class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [{
        src: '',
        caption: '',
        tags: [],
        alertMessage: '',
        isError: false,
        isSuccess: false,

      },
      ],
      file: null,
    };
  }

  handleFileSelect = (event) => {
    this.setState({
      file: event.target.files[0],


    });
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
    console.log(event.target.value);
  };

  handleFileUpload = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('caption', this.state.fields.caption);
    formData.append('tags', this.state.fields.tags);
    console.log(formData);


    const token = TokenManager.getToken();

    const axiosConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    };

    Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/images', formData, axiosConfig)
      .then(() => this.setState({
        fields: {
          src: '',
          caption: '',
          tags: [],
          file: null,
        },
      }));
  };

  render() {
    return (
      <div className="upload-form">
        <form>
          <label htmlFor="upload-field"></label>
          <input name="src" type="file" value={this.state.fields.file} onChange={this.handleFileSelect}></input>
          <img className="image-preview" src={this.state.src} />
          <label htmlFor="captiom">Caption:</label>
          <input name="caption" type="text" value={this.state.fields.caption} onChange={this.handleFieldChange}></input>
          <label htmlFor="tags">Tags:</label>
          <input name="tags" type="text" value={this.state.fields.tags} onChange={this.handleFieldChange}></input>


          <button type="submit" onClick={this.handleFileUpload}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UploadImage;
