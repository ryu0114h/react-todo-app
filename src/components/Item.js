import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { deleteData, addCheckedData } from "../actions";
import ItemChildren from "./ItemChildren";

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
                        <ItemChildren index={index} value={value} classes={classes} doAction={doAction} handleToggle={handleToggle} labelId={labelId}/>
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
                        <ItemChildren index={index} value={value} classes={classes} doAction={doAction} handleToggle={handleToggle} labelId={labelId} />
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
                        <ItemChildren index={index} value={value} classes={classes} doAction={doAction} handleToggle={handleToggle} labelId={labelId} />
                    );
                })
            )}
        </List>
    );
}
export default Item;