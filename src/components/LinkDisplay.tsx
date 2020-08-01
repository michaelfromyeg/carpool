import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function LinkDisplay() {
    const classes = useStyles();

    return (
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Link To API here"
          InputProps={{
            readOnly: true,
          }}
        />
    )
}