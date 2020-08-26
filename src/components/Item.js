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
    const [checked, setChecked] = useState([]);
    const [checkedIndex, setCheckedIndex] = useState([]);
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    let index = -1;

    // const checkedData = [];
    // let doneIndex = 0;

    console.log(checked)
    console.log(selector.checkedData)

    const handleToggle = (value, index) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        // const currentIndex = checked.indexOf(value);
        // const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        // console.log(newChecked)
        // console.log(checkedData)

        dispatch(addCheckedData(newChecked))
    };



    // const handleToggle = (value, index) => () => {
    //     const currentIndex = checkedIndex.indexOf(index);
    //     const newCheckedIndex = [...checkedIndex];

    //     if (currentIndex === -1) {
    //         newCheckedIndex.push(index);
    //     } else {
    //         newCheckedIndex.splice(currentIndex, 1);
    //     }

    //     setCheckedIndex(newCheckedIndex);

    //     newCheckedIndex.map(index => {
    //         checkedData[doneIndex++] = selector.data[index];
    //     })

    //     dispatch(addCheckedData(checkedData))
    // };

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
                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(value, index)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    // checked={checkedIndex.indexOf(index) !== -1}
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
                })
            )}
            {/* {(props.value === "ToDo") && (
                selector.data.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    index++;

                    return (
                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(value, index)}>
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
                })
            )} */}
            {(props.value === "Done") && (
                (selector.checkedData) &&
                selector.checkedData.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    index++;
                    handleToggle(index);

                    return (
                        <ListItem key={index} role={undefined} dense button onClick={handleToggle(value, index)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selector.checkedData.indexOf(value) !== -1}
                                    // checked={checked.indexOf(value) !== -1}
                                    // checked={checkedIndex.indexOf(index) !== -1}
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
                })
            )}

            {/* {(props.value === "ToDo") && (2)}
            {(props.value === "Done") && (3)} */}

            {/* {selector.data.map((value) => {
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
            })} */}
        </List>
    );
}

export default Item;