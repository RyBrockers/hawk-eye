import React from 'react';
import '../Styles/ImagesComponent.scss';
import axios from 'axios';
import ThumbCard from './thumb-card';


class ImagesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.fields)
      .then((response) => this.setState({ images: response.data }));
  }


  render() {
    return (
      <React.Fragment>
        <div className="image-area">
          {this.state.images.map(image => {
            return (
              <div key={image._id} className="col">
                <ThumbCard
                  image={image}
                />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}


export default ImagesComponent;
