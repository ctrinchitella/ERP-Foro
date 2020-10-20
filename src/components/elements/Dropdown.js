import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const DropDownInfo = [
  {
    value: 'Netsuite',
    label: 'Netsuite',
  },
  {
    value: 'JDE',
    label: 'JD Edwards',
  },
  {
    value: 'OC',
    label: 'Oracle Cloud',
  },
  {
    value: 'SAP',
    label: 'SAP',
  },
];


const useStyles = makeStyles(theme => ({
    appBarStyle: { 
        width : '80%',
        height : 40,
        background : 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        color: grey[900],
        
    },
    MultiTabStyle: {
        width: 400
    },
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
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please enter an ERP"
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



