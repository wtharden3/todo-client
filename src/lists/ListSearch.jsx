import {useState, useEffect} from 'react';
import List from './list/list';

const Lists = (props) => {
    const [list, setLists] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/lists/getalllists', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            }
        })
        .then(res => res.json())
        .then(data => setLists(data))
    }, [])


    return(
        <div>
            <table class="sortable">
                <thead>
                    <tr>
                        <th>Date: </th>
                        <th>Task Name: </th>
                        <th>Duration: </th>
                        <th>Needs to be completed by: </th>
                        <th>Task description: </th>
                        <th>Completed: </th>
                    </tr>
                </thead>
                <tbody>
                    <List lists={lists} />
                </tbody>
            </table>
        </div>
    )
}

export default Lists;




// import React, { useState } from 'react'



// const SearchResults = (props) => {
//     return(
//         <div>
//             {props.results.map(result => {
//                 return (
//                     <div key={result._id}> 
//                     <p>
//                         {result.listName.length > 0 ? ' Task Name: ' : ''}
//                     </p>
//                     <ul>
//                         {result.listName.map(listName => <li key={listName.value}>{listName.value}</li>)}
//                     </ul>
//                     <p>
//                         {result.date.length > 0 ? ' Created on: ' : ''}
//                     </p>
//                     <ul>
//                         {result.date.map(date => <li key={date.value}>{date.value}</li>)}
//                     </ul>
//                     <p>
//                         {result.description.length > 0 ? ' Description: ' : ''}
//                     </p>
//                     <ul>
//                         {result.description.map(description => <li key={description.value}>{description.value}</li>)}
//                     </ul>
//                     <p>
//                         {result.duration.length > 0 ? ' Estimated time to completion: ' : ''}
//                     </p>
//                     <ul>
//                         {result.duration.map(date => <li key={duration.value}>{duration.value}</li>)}
//                     </ul>
//                     <p>
//                         {result.timeDue.length > 0 ? 'Need to be finished by: '}
//                     </p>
//                 )
//             })}
//         </div>
//     )
// }

// export default SearchResults;

// // link 

// </div>

// import axios from 'axios'

// class Search extends Component {
//     state = {
//         query: '',
//         results: []
//     }
//     getInfo = () => {
//         axios.get('http://localhost:4000/list/getalltasks')
//         .then(({ data }) => {
//             this.setState({
//                 results: data.data   //REVISIT THIS WITH SPECIFIC RETURN OBJECT NAME
//             })
//         })
//     }

//     handleInputChange = () => {
//         this.setState({
//             query: this.search.value
//         }, () => {
//             if (this.state.query && this.state.query.length > 1) {
//                 if (this.state.query.length % 2 === 0 ) {
//                     this.getInfo()
//                 }
//             }
//         })
//     }

//     render() {
//         return(
//             <form>
//                 <input placeholder="Search for.." ref={input => this.search = input} onChange={this.handleInputChange} />
//                 <p>{this.state.query}</p>
//             </form>
//         )
//     }
// }

// export default Search;




// import React from 'react';

// class Search extends React.Component {
//     constructor(props) {
//         super (props);

//         this.state = {
//             query: '',
//             results: {},
//             loading: false,
//             message: '',
//         };
//     }
//     render() {
//         return (
//             <div className="container">
//                 <h2 className="heading">Search for a specific task here: </h2>
//                 <label className="search-label" htmlFor="search-input">
//                     <input 
//                         type="text" 
//                         value=""
//                         id="search-input"
//                         placeholder="Search for a specific task here: "
//                         />
//                     <i className="fa fa-search search-icon"/>
//                 </label>
//             </div>
//         )
//     }
// }

// export default Search;