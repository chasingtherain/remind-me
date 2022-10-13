import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import { Stack } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useGlobalContext from '../hooks/useGlobalContext';


export default function Form() {
    const {currentTime,region,timezoneSelection,selectTimezone} = useGlobalContext()
    const [dateValue, setDateValue] = useState(new Date());
    const [emailContent, setEmailContent] = useState("")
    const [recipientEmail, setRecipientEmail] = useState("")
    const [timeValue, setTimeValue] = useState("")
    const [dateError, setDateError] = useState("")
    const [timeError, setTimeError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(dateValue, timeValue);
        if (dateValue === '' || dateValue === undefined) {
            setDateError("Date is required!")
        }
        
        if (timeValue === '' || timeValue === undefined) {
            setTimeError("Time is required!")
        }
        else 
        console.log("form submitted")
    }

    const handleDateSelection = (newValue) => {
        setDateValue(newValue)
        setDateError("")
    }

    const handleTimeSelection = (newValue) => {
        setTimeValue(newValue)
        setTimeError("")
    }

    return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
        <FormControl  sx={{display: "flexbox"}}>
            <form onSubmit={handleSubmit}>
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
                <DatePicker
                    renderInput={(params) => <TextField {...params} sx={{width: 500}} helperText = {(dateError) ? dateError : ""}/>}
                    label="On this date"
                    value={dateValue}
                    disablePast
                    onChange={handleDateSelection}
                    inputFormat='Do MMMM YYYY'
                />
                <TimePicker
                    label="At this time"
                    value={timeValue}
                    onChange={handleTimeSelection}
                    renderInput={(params) => <TextField {...params} helperText = {(timeError) ? timeError : ""} />}
                />
                {/* timezone input */}
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Timezone</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        defaultValue='Etc/GMT'
                        value={(timezoneSelection) ? timezoneSelection : 'Etc/GMT'}
                        onChange={selectTimezone}
                        required
                        label="Timezone"
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {
                            region.map((region,index) =><MenuItem key={index} value={region}>{region}</MenuItem>)
                        }
                    </Select>
                        {timezoneSelection && <p>Current time at {timezoneSelection} is: {currentTime}</p>}
                        {!timezoneSelection && <p>Current time at ETC/GMT is: {currentTime}</p>}
                </FormControl>
                <Button type='submit' variant="contained" sx={{width: 500}}>Set Reminder</Button>

                </Stack>
            </form>
        </FormControl>   
    </LocalizationProvider>
    )
}
