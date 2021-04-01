import React from 'react';
import {connect} from 'react-redux';
import s from '../ContactList/ContactList.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';

const ContactList = function ({ contacts, deleteContact }) {
  return (
    <>
               {contacts.map(e => {
          return (
            <li key={e.id}>
              <span>{e.name}: </span>
              <span>{e.number}</span>
              <button
                type="button"
                className={s.form__list_button}
                onClick={() => deleteContact(e.id)}
              >
                Delete contact
              </button>
            </li>
          );
        })}
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
const mapDispatchToProps = dispatch => ({
  deleteContact: (id) => dispatch(contactsActions.deleteContact(id)), 
});


ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);