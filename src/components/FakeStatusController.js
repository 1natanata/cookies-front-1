import React from 'react';
import {FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Paper} from "@material-ui/core";
import Switch from "react-bootstrap/Switch";

// const FakeStatusController = () => (
export default function FakeStatusController() {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    return (
        <div>
            <Paper className="bg-light mb-3">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Статус</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
                            label="Миксер"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.jason} onChange={handleChange} name="jason" />}
                            label="Холдер"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.antoine} onChange={handleChange} name="antoine" />}
                            label="Печка"
                        />
                    </FormGroup>
                    <FormHelperText>Подсказочка</FormHelperText>
                </FormControl>
            </Paper>
        </div>
    );
}
// export default FakeStatusController