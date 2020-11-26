const List = (props) => {
    console.log(props);
    return(

        props.lists.map((list, index) => {
            console.log(list)
            return(
                <tr key={index}>
                    <td>{list.date}</td>
                    <td>{list.listName}</td>
                    <td>{list.duration}</td>
                    <td>{list.timeDue}</td>
                    <td>{list.description}</td>
                    <td>{list.isChecked}</td>
                </tr>
            )
        })
    )
}

export default List;