import React from "react";
import './Contact.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
		<div className="home">
			<form
				onSubmit={this.submitForm}
				action="https://formspree.io/f/xeqpowlg"
				method="POST"
			>
				<div className="home_row home_padding_top">
					<h1>Email Us</h1>
				</div>
			
				<div className="home_row">
					<label className="home_title">Name*</label>
					<div className="home_flex">
					<label className="home_label home_left">
						<input className="home_input" type="text" name="firstName" maxlength="20"/>
						<span className="home_span">First Name</span>
					</label>
					
					<label className="home_label">
						<input className="home_input" type="text" name="lastName" maxlength="20"/>
						<span className="home_span">Last Name</span>
					</label>
					</div>
				</div>
				
				<div className="home_row">
					<label className="home_title">Email*</label>
					<input className="home_input" type="email" name="email" maxlength="40"/>
				</div>
				
				<div className="home_row">
					<label className="home_title">Message*</label>
					<textarea className="home_inputArea" type="text" name="message" rows="4" maxlength="200"/>
				</div>
				
				<div className="home_row home_padding_bottom">
					<button className="home_btn">SEND
					</button>
				</div>
				
				{status === "SUCCESS" ? <div className="home_row">Thanks for contacting us!</div> : <div></div>}
				{status === "ERROR" && <div className="home_row">Ooops! There was an error. Please check if you have input right information.</div>}
			</form>
		</div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default MyForm;