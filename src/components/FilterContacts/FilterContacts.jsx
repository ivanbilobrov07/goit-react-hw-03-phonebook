import PropTypes from 'prop-types';
import { Component } from 'react';

import { FilterInput, FilterFormGroup } from './FilterContacts.styled';

export class FilterContacts extends Component {
  state = {
    value: '',
  };

  handleFilterValueInput = ({ target: { value } }) => {
    value = value.toLowerCase();
    this.setState({ value });

    this.props.getFilteredValue(value);
  };

  render() {
    const { value } = this.state;

    return (
      <FilterFormGroup>
        Search:
        <FilterInput
          type="text"
          name="filter"
          onChange={this.handleFilterValueInput}
          value={value}
        />
      </FilterFormGroup>
    );
  }
}

FilterContacts.propTypes = {
  getFilteredValue: PropTypes.func.isRequired,
};
