import React from "react";

class ContactPage extends React.Component {
  constructor(props) {
    super();
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <h3>Contact Page</h3>
        <div>
          <h4>Lets talk!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
            quam id justo hendrerit mollis. Sed feugiat erat ac tortor vehicula,
            et gravida ante tincidunt. Quisque iaculis urna a libero consequat
            rutrum.
          </p>
          <label>Email</label>
          <input type="text" ref={this.textInput} />
          <button>SEND</button>
        </div>
      </div>
    );
  }
}

export default ContactPage;
