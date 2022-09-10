import React from 'react';
import Select from 'react-select';

const SelectHome = ({ options, onSelect}) => {
    return (
        <Select onChange={onSelect} className='w-100' options={options} />

    )
}

export default SelectHome;