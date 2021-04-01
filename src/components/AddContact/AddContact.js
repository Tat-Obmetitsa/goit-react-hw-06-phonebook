import React, { Component } from 'react';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from '../AddContact/AddContact.module.css';
import shortid from 'shortid';
class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.form_label} htmlFor={this.nameInputId}>
          Name
          <input
            className={s.form__input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label className={s.form_label} htmlFor={this.numberInputId}>
          Number
          <input
            className={s.form__input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <button type="submit" className={s.form__button}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsActions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(AddContact);
