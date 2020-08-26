import React from "react";
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
    const [checked, setChecked] = React.useState([]);
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    let index = -1;

    // console.log(checked)

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        // console.log(currentIndex);
        // console.log(value)
        // console.log(checked);
        // console.log(newChecked);
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
                    <ListItem key={index} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                        <ListItemSecondaryAction>
                            <Button variant="contained" color="primary" onClick={doAction} value={index} className={classes.button}>
                                Delete
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default Item;




