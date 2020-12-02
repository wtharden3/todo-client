import React, {useState, useEffect} from 'react';
// import List from './list/list';

const useSortableData = (items, config = null ) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    
    const SortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortedField !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);
    
    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const TaskSort = (props) => {
        const { tasks } = props;
        const { items, requestSort } = useSortableData(tasks);
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        };
    }

    return (
        <Table>
            <caption>WORK GODDAMN YOU!!!!!!!</caption>
            <thead>
                <tr>
                    <th>
                        <button type="button" onClick={() => requestSort('date')}>
                            Date:
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort('listName')}>
                        Task to be completed:
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort('duration')}>
                        Estimated time to completion:
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(list => (
                    <tr key={index}>
                        <th scope="row">{list.owner_id}</th>
                        <td>{list.date}</td>
                        <td>{list.listName}</td>
                        <td>{list.duration}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}