import React from 'react';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from '../SearchFilter/SearchFilter.module.css';
// import PropTypes from 'prop-types';
const SearchFilter = ({ value, onChange }) => (
  <label className={s.form__label}>
    Find contacts by name
    <input type="text" name="name" value={value} onChange={onChange} className={s.form__input} />
  </label>
);
// SearchFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };


const filterContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: filterContacts(items, filter)
});



const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)), 
});
export default connect(mapStateToProps, mapDispatchToProps) (SearchFilter);
