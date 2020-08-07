import React from 'react';
import axios from 'axios';


class About extends React.Component {
  constructor(props) {
    super(props);

    document.title = "React Test | About";

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      showData: 20
    }
  }

  componentDidMount() {

    // Axios
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            data: res.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
      const { data, showData } = this.state;
      return (
        data.slice(0, showData).map(item => (
      <img src={item.url} alt="img"/>
      )));
      }
}

export default About;