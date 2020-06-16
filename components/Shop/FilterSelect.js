import React, {useState} from 'react';

import Dropdown from 'react-select';
const options = [
    { value: 'popular', label: 'Popularity'},
    { value: 'rating', label: 'Average Rating' },
    { value: 'latest', label: 'Latest' },
    { value: 'pricelow', label: 'Price : Low to High' },
    { value: 'pricehight', label: 'Price : High to Low' },
    { value: 'new', label: 'New'},
];

const FilterSelect = (props) => {

    const [defaultValue, setValue] = useState(options[0]);
    return (
        <div className="mx-3" style={{minWidth:'185px'}}>
            <Dropdown
                className="FilterSelect"
                options={options}
                defaultValue ={defaultValue}
                onChange={props.onChange}
                placeholder="Select an option" />
        </div>
    )
};

export default React.memo(FilterSelect);