import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import { Stack } from '@mui/material';
// import DatePicker from './DatePicker'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Form({region,timezone,setTimezone}) {
    const [dateValue, setDateValue] = useState(new Date());
    const [emailContent, setEmailContent] = useState("")
    const [recipientEmail, setRecipientEmail] = useState("")


    return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
        <FormControl onClick={()=>{console.log("form submitted")}} sx={{display: "flexbox"}}>
            <Stack spacing = {3}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email Reminder Content"
                    value = {emailContent}
                    required
                    multiline
                    minRows={4}
                    maxRows={6}
                    onChange={(e)=> setEmailContent(e.target.value)}
                    variant="outlined"
                    sx={{width: 500, marginTop: "1%"}}
                />
                <TextField
                id="outlined-multiline-flexible"
                label="Send Email to"
                type="email"
                required
                value={recipientEmail}
                onChange={(e)=> setRecipientEmail(e.target.value)}
                variant="outlined"
                sx={{width: 500, marginTop: "1%"}}
                />
            <DateTimePicker
                renderInput={(props) => <TextField {...props} sx={{width: 500}}/>}
                label="Send Email at this time"
                value={dateValue}
                onChange={(newValue) => {setDateValue(newValue)}}
                inputFormat='Do MMMM YYYY, h:mm a'
            />
            {/* timezone input */}
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Timezone</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    defaultValue='None'
                    value={timezone}
                    onChange={(e)=>{setTimezone(e.target.value)}}
                    label="Timezone"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        region.map((region,index) =><MenuItem key={index} value={region}>{region}</MenuItem>)
                    }
                </Select>
                    {timezone && <p>Current time at {timezone} is: </p>}
            </FormControl>
            <Button type='submit' variant="contained" sx={{width: 500}}>Set Reminder</Button>

            </Stack>
        </FormControl>   
    </LocalizationProvider>
    )
}
