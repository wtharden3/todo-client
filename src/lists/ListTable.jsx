import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../helpers/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// hi
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
    console.log('taskNameA', taskNameA);

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
    console.log('taskNameA', taskNameA);

    let comparison = 0;
    if (taskNameA < taskNameB) {
      comparison = 1;
    } else if (taskNameA > taskNameB) {
      comparison = -1;
    }
    return comparison;
  };

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
    if (!dateSorted) {
      props.lists.sort(compareDateDec);
      setDateSorted(true);
    } else if (dateSorted) {
      props.lists.sort(compareDateAsc);
      setDateSorted(false);
    }
  };

  const sortTaskNameBtn = () => {
    if (!taskNameSorted) {
      props.lists.sort(compareTaskNameDec);
      setTaskNameSorted(true);
    } else if (taskNameSorted) {
      props.lists.sort(compareTaskNameAsc);
      setTaskNameSorted(false);
    }
  };

  const sortDueDateBtn = () => {
    if (!dueDateSorted) {
      props.lists.sort(compareDueDateDec);
      setDueDateSorted(true);
    } else if (dueDateSorted) {
      props.lists.sort(compareDueDateAsc);
      setDueDateSorted(false);
    }
  };
  const listMapper = () => {
    console.log('props.lists', props.lists);

    return props.lists.map((list, index) => {
      console.log(`index: ${index}, list: ${list}`);

      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{list.date}</td>
          <td>{list.listName}</td>
          <td>{list.duration} minutes</td>
          <td>{list.timeDue}</td>
          <td>{list.description}</td>
          <td>{`${list.isChecked}`}</td>
          <td>
            <FontAwesomeIcon
              icon={['fa', 'user-edit']}
              size="2x"
              style={{ color: 'orange' }}
              onClick={() => {
                props.editUpdateList(list);
                props.updateOn();
              }}
            />{' '}
            &nbsp; &nbsp;
            <FontAwesomeIcon
              icon={['fa', 'trash-alt']}
              size="2x"
              style={{ color: 'red' }}
              onClick={() => {
                deleteList(list);
              }}
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>Your Tasks:</h3>
      <hr />
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>
              Date Created
              &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={['fa', 'sort']}
                size="xl"
                color="#17A2B8"
                onClick={sortDateBtn}
              />
            </th>
            <th>
              Task Name
              &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={['fa', 'sort']}
                size="xl"
                color="#17A2B8"
                onClick={sortTaskNameBtn}
              />
            </th>
            <th>
              Duration
              &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={['fa', 'sort']}
                size="xl"
                color="#17A2B8"
                onClick={sortDurationBtn}
              />
            </th>
            <th>
              Due Date
              &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={['fa', 'sort']}
                size="xl"
                color="#17A2B8"
                onClick={sortDueDateBtn}
              />
            </th>

            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{listMapper()}</tbody>
      </Table>
      <Button
        color="info"
        className="w-100 py-3"
        onClick={() => {
          props.setModal(true);
        }}
      >
        Click here to make a new task!
      </Button>
    </div>
  );
};
export default ListTable;
