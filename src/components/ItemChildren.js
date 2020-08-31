import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const ItemChildren = (props) => {
    const selector = useSelector(state => state);

    return (
        <ListItem key={props.index} role={undefined} dense button onClick={props.handleToggle(props.value)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={selector.checkedData.indexOf(props.value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': props.labelId }}
                />
            </ListItemIcon>
            <ListItemText id={props.labelId} primary={props.value} />
            <ListItemSecondaryAction>
                <Button variant="contained" color="primary" onClick={props.doAction} value={props.value} className={props.classes.button}>
                    削除
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ItemChildren;