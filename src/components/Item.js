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
import { deleteData, addCheckedData } from "../actions";

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

const Item = (props) => {
    const classes = useStyles();
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    let index = -1;

    const handleToggle = (value) => () => {
        const currentIndex = selector.checkedData.indexOf(value);
        const currentNotIndex = selector.notCheckedData.indexOf(value);
        const newChecked = [...selector.checkedData];
        const newNotChecked = [...selector.notCheckedData];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        if (currentNotIndex === -1) {
            newNotChecked.push(value);
        } else {
            newNotChecked.splice(currentNotIndex, 1);
        }

        dispatch(addCheckedData(newChecked, newNotChecked));
    };

    const doAction = (e) => {
        e.preventDefault();
        dispatch(deleteData(e.target.value))
    }

    return (
        <List className={classes.root}>
            {(props.value === "ALL") && (
                selector.data.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    index++;

                    return (
                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selector.checkedData.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                            <ListItemSecondaryAction>
                                <Button variant="contained" color="primary" onClick={doAction} value={value} className={classes.button}>
                                    削除
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })
            )}
            {(props.value === "ToDo") && (
                (selector.notCheckedData) &&
                selector.notCheckedData.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    index++;
                    handleToggle(index);

                    return (
                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selector.checkedData.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                            <ListItemSecondaryAction>
                                <Button variant="contained" color="primary" onClick={doAction} value={value} className={classes.button}>
                                    削除
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })
            )}
            {(props.value === "Done") && (
                (selector.checkedData) &&
                selector.checkedData.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    index++;
                    handleToggle(index);

                    return (
                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selector.checkedData.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                            <ListItemSecondaryAction>
                                <Button variant="contained" color="primary" onClick={doAction} value={value} className={classes.button}>
                                    削除
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })
            )}
        </List>
    );
}
export default Item;