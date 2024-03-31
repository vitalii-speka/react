import React, { Component } from "react";

/* 
class Counter extends Component {
  //   static defaultProps = {
  //     step: 1,
  //     // initialValue: 0,
  //   };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

handleIncrement() {
  this.setState(state => {
    console.log('increment state is:', state)
    return {
       increment: count++
    }
  });
}

    // console.log("🚀 ~ Counter ~ this.setState ~ step:", step);
    // console.log("Increment button was clicked!", e); // працює

    // console.log("this.props: ", this.props); // Error: cannot read props of undefined
  };

  handleDecrement = (e) => {
    // this.setState((state, props) => ({
    //   value: state.value - props.step,
    // }));
    console.log("Decrement button was clicked!", e); // працює
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
*/

class Counter extends Component {
  /* constructor(props) ===> new way on the bottom
      constructor(props) {
        super(props);
        this.state = {
      count: 0,
    };
  }
  */

  state = {
    count: 0,
  };

  // Change code below this line
  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
    /* розширений запис нижче!!! 
    this.setState((prevState) => {
      console.log("🚀 ~ Counter ~ prevState:", prevState);

      return {
        count: prevState.count + 1,
      };
    });
    */
  };

  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  reset = () => {
    this.setState((state) => ({
      count: (state.count = 0),
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        {<h1>Total: {count > 0 ? count : "0"}</h1>}
      </div>
    );
  }
}

export default Counter;
