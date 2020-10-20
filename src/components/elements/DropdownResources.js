import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const DropDownInfo = [
  {
    value: 'Barrueco, Diego Martín',
    label: 'Barrueco, Diego Martín',
  },
  {
    value: 'Bautista, Victoria',
    label: 'Bautista, Victoria',
  },
  {
    value: 'Borchez, Conrado',
    label: 'Borchez, Conrado',
  },
  {
    value: 'Brabermoin, Matías Ignacio',
    label: 'Brabermoin, Matías Ignacio',
  },
  {
    value: 'Calefato, Albano Ariel',
    label: 'Calefato, Albano Ariel',
  },
  {
    value: 'Castiñeira Cardenas, Gabriel',
    label: 'Castiñeira Cardenas, Gabriel',
  },
  {
    value: 'Cattani, Gastón Fernando',
    label: 'Cattani, Gastón Fernando',
  },
  {
    value: 'Desilvio, Joaquín Matias',
    label: 'Desilvio, Joaquín Matias',
  },
  {
    value: 'Diaz, Lucas',
    label: 'Diaz, Lucas',
  },
  {
    value: 'Dotta, Matias',
    label: 'Dotta, Matias',
  },
  {
    value: 'Duclós, Claudio Gabriel',
    label: 'Duclós, Claudio Gabriel',
  },
  {
    value: 'Falzarano, Alejandro Gabriel',
    label: 'Falzarano, Alejandro Gabriel',
  },
  {
    value: 'Fanelli, Fernando Gabriel',
    label: 'Fanelli, Fernando Gabriel',
  },
  {
    value: 'Fantasia, Juan Ignacio',
    label: 'Fantasia, Juan Ignacio',
  },
  {
    value: 'Herrera Valero, Jose Antonio',
    label: 'Herrera Valero, Jose Antonio',
  },
  {
    value: 'Hontalvilla Giraldi, Augusto',
    label: 'Hontalvilla Giraldi, Augusto',
  },
  {
    value: 'Jacob, Agustín Nicolás',
    label: 'Jacob, Agustín Nicolás',
  },
  {
    value: 'Laborde Amado, Mateo Ernesto',
    label: 'Laborde Amado, Mateo Ernesto',
  },
  {
    value: 'Miguens, Martin David',
    label: 'Miguens, Martin David',
  },
  {
    value: 'Minnino, Guido Andrés',
    label: 'Minnino, Guido Andrés',
  },
  {
    value: 'Parodi, Germán Eduardo',
    label: 'Parodi, Germán Eduardo',
  },
  {
    value: 'Quintana, Federico',
    label: 'Quintana, Federico',
  },
  {
    value: 'Radwanitzer, Mayra Belen',
    label: 'Radwanitzer, Mayra Belen',
  },
  {
    value: 'Rozenberg, Pablo Martin',
    label: 'Rozenberg, Pablo Martin',
  },
  {
    value: 'Sarrailh, Alejandro',
    label: 'Sarrailh, Alejandro',
  },
  {
    value: 'Sartori, Agustín',
    label: 'Sartori, Agustín',
  },
  {
    value: 'Taverna, Juan Manuel',
    label: 'Taverna, Juan Manuel',
  },
  {
    value: 'Trinchitella, Carla',
    label: 'Trinchitella, Carla',
  },
  {
    value: 'Valente, Maximiliano Ezequiel',
    label: 'Valente, Maximiliano Ezequiel',
  },
  {
    value: 'Vega, Brian Alexis',
    label: 'Vega, Brian Alexis',
  },
  {
    value: 'Voskoboinik, Teo',
    label: 'Voskoboinik, Teo',
  },
];


const useStyles = makeStyles(theme => ({
    TextfieldStyle: {
        width: 230,
        height: 25,
        marginLeft: 20,
        marginTop: 30,
    }
}));

export default function Dropdown(props) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {       
        setCurrency(event.target.value);
        props.selectResource(event.target.value)
    };
    return( 
        <div>
            <TextField
                id="outlined-select-currency"
                select
                label="Select your Name"
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



