import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { deleteData } from "../actions";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
        margin: "0 auto",
        borderRadius: 10,
        padding: 0,
        '& > li:not(:last-child)': {
            borderTop: "1px solid #666",
            borderRight: "1px solid #666",
            borderLeft: "1px solid #666",
        },
        '& > li:last-child': {
            border: "1px solid #666",
        },
    },
    button: {
        '& > .MuiButton-label': {
            pointerEvents: "none",
        },
    }
}));

const Item = () => {
    const classes = useStyles();
    const [checkedIndex, setCheckedIndex] = useState([]);
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    let index = -1;

    const handleToggle = (index) => () => {
        const currentIndex = checkedIndex.indexOf(index);
        const newCheckedIndex = [...checkedIndex];

        if (currentIndex === -1) {
            newCheckedIndex.push(index);
        } else {
            newCheckedIndex.splice(currentIndex, 1);
        }

        setCheckedIndex(newCheckedIndex);

    };

    const doAction = (e) => {
        e.preventDefault();
        dispatch(deleteData(e.target.value))
        console.log(e.target.value)
    }

    return (
        <List className={classes.root}>
            {selector.data.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                index++;

                return (
                    <ListItem key={index} role={undefined} dense button onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checkedIndex.indexOf(index) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                        <ListItemSecondaryAction>
                            <Button variant="contained" color="primary" onClick={doAction} value={index} className={classes.button}>
                                削除
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default Item;




