import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

const ListTable = props => {
  const [durationSorted, setDurationSorted] = useState(false);
  const [dateSorted, setDateSorted] = useState(false);
  const [taskNameSorted, setTaskNameSorted] = useState(false);
  const [dueDateSorted, setDueDateSorted] = useState(false);

  const deleteList = list => {
    fetch(`${APIURL}/lists/delete/${list.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: props.token,
      }),
    }).then(() => props.fetchLists());
  };

  const compareDurationDec = (a, b) => {
    const durationA = a.duration;
    const durationB = b.duration;

    let comparison = 0;
    if (durationA > durationB) {
      comparison = 1;
    } else if (durationA < durationB) {
      comparison = -1;
    }
    return comparison;
  };

  const compareDurationAsc = (a, b) => {
    const durationA = a.duration;
    const durationB = b.duration;

    let comparison = 0;
    if (durationA < durationB) {
      comparison = 1;
    } else if (durationA > durationB) {
      comparison = -1;
    }
    return comparison;
  };

//sort Date
  const compareDateDec = (a, b) => {
    const dateA = a.date.toUpperCase();
    const dateB = b.date.toUpperCase();

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison;
  };

  const compareDateAsc = (a, b) => {
    const dateA = a.date.toUpperCase();
    const dateB = b.date.toUpperCase();

    let comparison = 0;
    if (dateA < dateB) {
      comparison = 1;
    } else if (dateA > dateB) {
      comparison = -1;
    }
    return comparison;
  };
  
  //sort Task Name (listName = Task Name)
  const compareTaskNameDec = (a, b) => {
    const taskNameA = a.listName.toUpperCase();
    const taskNameB = b.listName.toUpperCase();
    console.log('taskNameA', taskNameA)

    let comparison = 0;
    if (taskNameA > taskNameB) {
      comparison = 1;
    } else if (taskNameA < taskNameB) {
      comparison = -1;
    }
    return comparison;
  };

  const compareTaskNameAsc = (a, b) => {
    const taskNameA = a.listName.toUpperCase();
    const taskNameB = b.listName.toUpperCase();
    console.log('taskNameA', taskNameA)

    let comparison = 0;
    if (taskNameA < taskNameB) {
      comparison = 1;
    } else if (taskNameA > taskNameB) {
      comparison = -1;
    }
    return comparison;
  };
  //sort Date
  const compareDueDateDec = (a, b) => {
    const dueDateA = a.timeDue.toUpperCase();
    const dueDateB = b.timeDue.toUpperCase();

    let comparison = 0;
    if (dueDateA > dueDateB) {
      comparison = 1;
    } else if (dueDateA < dueDateB) {
      comparison = -1;
    }
    return comparison;
  };

  const compareDueDateAsc = (a, b) => {
    const dueDateA = a.timeDue.toUpperCase();
    const dueDateB = b.timeDue.toUpperCase();

    let comparison = 0;
    if (dueDateA < dueDateB) {
      comparison = 1;
    } else if (dueDateA > dueDateB) {
      comparison = -1;
    }
    return comparison;
  };
  

  // SORT FUNCTIONS


  const sortDurationBtn = () => {
    if (!durationSorted) {
      props.lists.sort(compareDurationDec);
      setDurationSorted(true);
    } else if (durationSorted) {
      props.lists.sort(compareDurationAsc);
      setDurationSorted(false);
    }
  };

  const sortDateBtn = () => {
    if (!dateSorted){
      props.lists.sort(compareDateDec)
      setDateSorted(true)
    }else if(dateSorted){
      props.lists.sort(compareDateAsc)
      setDateSorted(false);
    }
  }

  const sortTaskNameBtn = () => {
    if (!taskNameSorted){
      props.lists.sort(compareTaskNameDec)
      setTaskNameSorted(true)
    }else if(taskNameSorted){
      props.lists.sort(compareTaskNameAsc)
      setTaskNameSorted(false);
    }
  }

  const sortDueDateBtn = () => {
    if (!dueDateSorted){
      props.lists.sort(compareDueDateDec)
      setDueDateSorted(true)
    }else if(dueDateSorted){
      props.lists.sort(compareDueDateAsc)
      setDueDateSorted(false);
    }
  }

  

  const listMapper = () => {
    console.log('props.lists', props.lists);

    return props.lists.map((list, index) => {
      //sort first -- dont use useEffect yet (or ever) (need a useEffect? to listen to button)
      //may have a parameter in our compare fn so that we can choose which one to compare

      console.log(`index: ${index}, list: ${list}`);

      //just display
      return (
        <tr key={index}>
          <th scope="row">{list.owner_id}</th>
          <td>{list.date}</td>
          <td>{list.listName}</td>
          <td>{list.duration} minutes</td>
          <td>{list.timeDue}</td>
          <td>{list.description}</td>
          <td>{`${list.isChecked}`}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateList(list);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteList(list);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>list History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Date Created
              <button onClick={sortDateBtn}>Click</button>
            </th>
            <th>Task Name
              <button onClick={sortTaskNameBtn}>Click</button>
            </th>
            <th>
              Duration <button onClick={sortDurationBtn}>Click</button>
            </th>
            <th>Due Date
              <button onClick={sortDueDateBtn}>Click</button>
            </th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{listMapper()}</tbody>
      </Table>
    </div>
  );
};
export default ListTable;
