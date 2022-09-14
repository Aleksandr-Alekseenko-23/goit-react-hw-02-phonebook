import React, { Component } from 'react';
import {
  FormPhoneBook,
  InputPhoneBook,
  LabelPhoneBook,
  Button,
} from './AddForm.styled.js';
import Icon from './../img/plus.svg';

export class AddForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(Object.assign(this.state, { id: this.props.id() }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormPhoneBook onSubmit={this.onHandleSubmit}>
        <LabelPhoneBook>
          Contact name
          <InputPhoneBook
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </LabelPhoneBook>
        <LabelPhoneBook>
          Phone number
          <InputPhoneBook
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </LabelPhoneBook>
        <Button type="submit">
          <img src={Icon} />
        </Button>
      </FormPhoneBook>
    );
  }
}

export default AddForm;
