import React, { Component } from 'react';
import s from '../App/App.module.css';
import AddContact from '../AddContact/AddContact';
import ContactList from '../ContactList/ContactList';
import SearchFilter from '../SearchFilter/SearchFilter';
// import shortid from 'shortid';
class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
  };
  // componentDidMount() {
  //   // console.log('App componentDidMount');

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('App componentDidUpdate');

  //   const newContact = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (newContact !== prevContacts) {
  //     // console.log('Обновилось поле contacts, записываю contacts в хранилище');
  //     localStorage.setItem('contacts', JSON.stringify(newContact));
  //   }
  // }

  // addContact = data => {
  //   const { contacts } = this.state;
  //   if (
  //     contacts.find(el => data.name.toLowerCase() === el.name.toLowerCase())
  //   ) {
  //     alert(`${data.name} is already in contacts`);
  //   } else {
  //     const contact = {
  //       id: shortid.generate(),
  //       name: data.name,
  //       number: data.number,
  //     };

  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   }
  // };
  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  // filterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  render() {
    // const { filter } = this.state;
    return (
      <div className={s.container}>
        <h1 className={s.container__title}>Phonebook</h1>
        <AddContact />
        {/* <AddContact onSubmit={this.addContact} /> */}
        <h2 className={s.container__title}>Contacts</h2>
        <SearchFilter  />
         {/* <SearchFilter value={filter} onChange={this.changeFilter} /> */}
        <ContactList />
                {/* <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        /> */}
      </div>
    );
  }
}
export default App;
