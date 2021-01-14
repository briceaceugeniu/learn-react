import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    const imageRef = () => React.createRef();
    console.log(imageRef);
  }

  componentDidMount() {}

  render() {
    const { urls, description } = this.props.image;

    return <img src={urls.regular} alt={description} />;
  }
}

export default ImageCard;
