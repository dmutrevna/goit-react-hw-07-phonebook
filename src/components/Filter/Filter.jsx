import React from 'react';
import { useDispatch } from 'react-redux';

import { addFilter } from 'redux/store/filterSlice';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterForm>
      <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </FilterForm>
  );
};
