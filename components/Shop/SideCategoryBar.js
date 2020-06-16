import React, {useEffect, useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Collapse} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expandButton: {
        transform: 'rotate(0deg)',
        padding : '0',
        position : 'absolute',
        marginLeft: 'auto',
        color : '#fff',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const SideCategoryBar = (props) => {
    const [bExpand, SetExpand] = React.useState(false);

    const [selectedId, setSelectedId] = useState(0);
    const [categoryList, setCategoryList] = React.useState([]);
    const handleExpandClick = () => {
        SetExpand(!bExpand);
    };

    useEffect(() => {
        setSelectedId(props.selectedId)
    }, [props.selectedId]);

    useEffect(() => {
        console.log(props.categories);
        setCategoryList(props.categories);
    }, [props.categories]);
    return (
        <div className='side-category-wrapper'>
            <div className='category-header'>
                <div>
                    <MenuIcon/>
                </div>
                <div style={{paddingLeft : '10px'}}>
                    All Categories
                </div>
                <IconButton
                    color="inherit"
                    style={{position:'absolute', right:'0', padding:'0', transition : '200ms', marginRight : '25px',
                        transform : bExpand ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    onClick={handleExpandClick}
                    aria-expanded={bExpand}
                    aria-label="show more"
                >
                    <ExpandIcon/>
                </IconButton>
            </div>
            <Collapse in={bExpand} timeout={"auto"} unmountOnExit className='category-body'>
                <ul>
                    {
                        categoryList &&
                        <li className={selectedId === 0 ? 'select' : 'ul_li'} onClick={() => props.onSelectCategory('', 0)} style={{cursor : 'pointer'}}>
                            <i className="icofont-bubble-right"></i>All</li>
                    }
                    {
                        categoryList && categoryList.map((item, id) => {
                            return(
                                <li key={id} className={(selectedId === id + 1) ? 'select' : 'ul_li'} onClick={() => props.onSelectCategory(item._id, id + 1)} style={{cursor : 'pointer'}}>
                                    <i className="icofont-bubble-right"></i>
                                    {item.name}
                                </li>
                            )

                        })
                    }
                </ul>
            </Collapse>
        </div>
    );
};

export default SideCategoryBar;