import React, { Component } from 'react';

class Product extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isSelected: false,
    };
  }

  toggleSelected = () => {
    this.setState(state => ({ isSelected: !state.isSelected }))
  };

  render() {
    return (
      <div key={this.props.id}>
        <p>
          {this.props.name}: {this.props.description}
        </p>
      </div>
    )
  }
}

export default Product;