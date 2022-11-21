import React, {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PartnersCard from '../components/PartnersCard'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



import data from '../data.js';
import capacities from '../data/capacities.js'
import types from '../data/types.js'
const Partners = () => {

    const [research, setResearch] = useState({
        type:'',
        capacity:''
    });

    const handleTypeChange = (event) => {
        setResearch({...research, type: event.target.value});
        console.log("type:", research.type);
    };

    const handleCapacityChange = (event) => {
        setResearch({...research, capacity:event.target.value});
        console.log("capacity:" ,research.capacity);
      };

    useEffect(() => {
    }, [])
    return (
        <>
        <Container sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
        <Typography>Utlisez notre outils de filtrage</Typography>
        <Box sx={{width:"100%", display:"flex"}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="evenement-select">Type d'événement</InputLabel>
                <Select
                labelId="evenement-select"
                id="evenement-select"
                onChange={handleTypeChange}
                label="evenement-select"
                value={research.type}

                >
                <MenuItem value="0">Select applicant type...</MenuItem>
                {
                    types.map((e) => <MenuItem value={e.value}>{e.desc}</MenuItem>)
                }

            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="capacity-select">Capacité de la salle</InputLabel>
                <Select
                labelId="capacity-select"
                id="capacity-select"
                onChange={handleCapacityChange}
                label="capacity-select"
                value={research.capacity}
                >
                {
                    capacities.map((e) => <MenuItem value={e.value}>{e.desc}</MenuItem>)
                }
            </Select>
        </FormControl>
        <Button variant="contained" onClick={() => console.log(research)}> Filtrer</Button>
        </Box>
        {
            data.map((e) => <PartnersCard {...e}/> )
        }
        </Container>

        </>
    )
}

export default Partners;