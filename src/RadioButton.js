import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';



export default function RadioButtons() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(3),
        },
        button: {
          margin: theme.spacing(1, 1, 0, 0),
        },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };
    return (
      <div>
        <FormControl component="fieldset" error={error} >
            <FormLabel component="legend">Do you have the answer/solution ready?</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={value} onChange={handleRadioChange}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="end"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="end" />
            </RadioGroup>
        </FormControl>
      </div>
    );
  }