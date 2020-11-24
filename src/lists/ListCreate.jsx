import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ListCreate = (props) => {
    const [date, setDate] = useState('');
    const [listname, setListname] = useState('');
    const [duration, setDuration] = useState('');
    const [timedue, setTimedue] = useState('');
    const [description, setDescription] = useState('');
    const [isChecked, setIsChecked] = useState('');

    return(
        <>
        <h3>Log a List, Here!!</h3>
        <Form>
            <FormGroup>
                <Label htmlFor="date"/>
                <Input name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="listname"/>
                <Input name="listname" value={listname} onChange={(e) => setListname(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description"/>
                <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="duration"/>
                <Input name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="timedue"/>
                <Input name="timedue" value={timedue} onChange={(e) => setTimedue(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="isChecked"/>
                <Input name="isChecked" value={isChecked} onChange={(e) => setIsChecked(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click here to submit your task!</Button>
        </Form>
        </>
    )
}

export default ListCreate;