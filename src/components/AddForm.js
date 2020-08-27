import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../actions/index";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    rootTextField: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    rootButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        backgroundColor: "#333",
        color: "white",
        '&:hover': {
            background: "#111",
        },
    }
}));

const AddForm = () => {
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const doChange = (e) => {
        setMessage(e.target.value);
    }

    const doAction = (e) => {
        e.preventDefault();
        if (message) {
            dispatch(addData(message))
            setMessage("");
        } else {
            alert('テキストを入力してね。')
        }
    }

    return (
        <div className={classes.root} >
            <h2>Your todo: </h2>
            <form className={classes.rootTextField} noValidate autoComplete="off">
                <TextField required id="outlined-basic" label="" variant="outlined" onChange={doChange} value={message} />
            </form>
            <div className={classes.rootButton}>
                <Button variant="contained" className={classes.button} onClick={doAction}>追加</Button>
            </div>
        </div>
    )
}
export default AddForm;