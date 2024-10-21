import { Button, Container, MenuItem, Select, TextField } from "@mui/material";
import {optimizedArray, reverseArray} from "../../../Dsa/Arrays/ArrayReverse";
import React, { useState } from "react";

const  MODULE = Object.freeze({
    REVERSE_ARRAY : 'REVERSE_ARRAY',
    REVERSE_ARRAY_OPTIMIZED : 'REVERSE_ARRAY_OPTIMIZED'
})

const DSAComponent = () => {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState(null);
    const [selectedFunction, setSelectedFunction] = useState('');

    const executableModule = (module: string) => {
        switch (module) {
            case MODULE.REVERSE_ARRAY:
                return reverseArray(JSON.parse(input));
            case MODULE.REVERSE_ARRAY_OPTIMIZED:
                return optimizedArray(JSON.parse(input));
        }
    }

    return <Container maxWidth="sm">
        <TextField id="input" label="Enter Input" variant="outlined" value={input} onChange={(value: React.ChangeEvent<HTMLInputElement>) => setInput(value.target.value)}></TextField>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFunction}
            label="Select Function"
            onChange={(value) => {
                console.log(value);
                setSelectedFunction(value.target.value)}}
        >
            {Object.values(MODULE).map((value, index) => <MenuItem key ={index} value={value}>{value}</MenuItem>)}
        </Select>
        <Button variant="contained" onClick={() => setOutput(executableModule(selectedFunction))}>
            Execute
        </Button>
        <p>
            {output && JSON.stringify(output)}
        </p>
    </Container>
}

export default DSAComponent;