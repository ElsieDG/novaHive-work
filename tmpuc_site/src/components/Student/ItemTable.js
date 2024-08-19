import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/ItemTable.css';

const ItemTable = ({ data }) => {
    const navigate = useNavigate();

    // State to track which columns are visible
    const [visibleColumns, setVisibleColumns] = useState({
        id: true,
        name: true,
        description: true,
        creator: true,
        date: true
    });

    // State for sorting
    const [sortField, setSortField] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' or 'desc'

    const [showColumnMenu, setShowColumnMenu] = useState(false);

    const handleRowClick = (id) => {
        navigate(`/item/${id}`);
    };

    const toggleColumnVisibility = (column) => {
        setVisibleColumns(prevState => ({
            ...prevState,
            [column]: !prevState[column]
        }));
    };

    const handleColumnMenuToggle = () => {
        setShowColumnMenu(!showColumnMenu);
    };

    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);
    };

    // Sort data
    const sortedData = [...data].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <div className="table-container">
            <button 
                onClick={handleColumnMenuToggle} 
                className="column-toggle-btn"
            >
                {showColumnMenu ? 'Hide Columns' : 'Show Columns'}
            </button>
            {showColumnMenu && (
                <div className="column-menu">
                    {Object.keys(visibleColumns).map(column => (
                        <label key={column}>
                            <input
                                type="checkbox"
                                checked={visibleColumns[column]}
                                onChange={() => toggleColumnVisibility(column)}
                            />
                            {column.charAt(0).toUpperCase() + column.slice(1)}
                        </label>
                    ))}
                </div>
            )}
            <table className="item-table">
                <thead>
                    <tr>
                        {visibleColumns.id && (
                            <th onClick={() => handleSort('id')}>
                                ID
                                {sortField === 'id' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
                            </th>
                        )}
                        {visibleColumns.name && (
                            <th onClick={() => handleSort('name')}>
                                Name
                                {sortField === 'name' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
                            </th>
                        )}
                        {visibleColumns.description && (
                            <th onClick={() => handleSort('description')}>
                                Description
                                {sortField === 'description' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
                            </th>
                        )}
                        {visibleColumns.creator && (
                            <th onClick={() => handleSort('creator')}>
                                Creator
                                {sortField === 'creator' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
                            </th>
                        )}
                        {visibleColumns.date && (
                            <th onClick={() => handleSort('date')}>
                                Date
                                {sortField === 'date' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(item => (
                        <tr key={item.id} onClick={() => handleRowClick(item.id)}>
                            {visibleColumns.id && <td>{item.id}</td>}
                            {visibleColumns.name && <td>{item.name}</td>}
                            {visibleColumns.description && <td>{item.description}</td>}
                            {visibleColumns.creator && <td>{item.creator}</td>}
                            {visibleColumns.date && <td>{item.date}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemTable;
