import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ListCreate from './ListCreate';
import Search from './lists/ListSearch';

const ListIndex = (props) => {
    const[lists, setLists] = useState([]);
    const fetchLists = () => {
        fetch('http://localhost:4000/list', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((logData) => {
            setLists(logData)
            console.log(logData)
        })
    }

    useEffect(() => {
        fetchLists();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <ListCreate fetchLists={fetchLists} token={props.token}/>
                </Col>
                <Col md="9">
                    <h2>Log a list to see a table. This will be added in later pages.</h2>
                    <Search />
                </Col>
            </Row>
        </Container>
    )
}

export default ListIndex;
