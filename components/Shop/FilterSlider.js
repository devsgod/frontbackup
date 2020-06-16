import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const PrettoSlider = withStyles({
    root: {
        color: '#ff1111',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const FilterSlider = (props) => {
    return (
        <PrettoSlider
            value={props.filterValue}
            defaultValue={props.defaultValue}
            max={props.max}
            onChangeCommitted={props.onChangeCommitted}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={valuetext}
        />
    )
};

export default FilterSlider;