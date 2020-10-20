import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const DropDownInfo = [
  {
    value: 'Netsuite',
    label: 'Netsuite',
  },
  {
    value: 'JD Edwards',
    label: 'JD Edwards',
  },
  {
    value: 'Oracle Cloud',
    label: 'Oracle Cloud',
  },
  {
    value: 'SAP',
    label: 'SAP',
  },
];


const useStyles = makeStyles(theme => ({
    TextfieldStyle: {
        width: 250,
        height: 25,
        marginTop: 30,
    }
}));

export default function Dropdown(props) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {       
        setCurrency(event.target.value);
        props.selectERP(event.target.value)
    };
    return( 
        <div>
            <TextField
                id="outlined-select-currency"
                select
                label="Select an ERP"
                value={currency}
                onChange={handleChange}
                variant="outlined"
                className={classes.TextfieldStyle}
            >
                {DropDownInfo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>
        </div>
    );
}   



