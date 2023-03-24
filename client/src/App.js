import './App.css';
import Calculate from './components/Calculate';
import Option from './components/Option'
import WrongAnswer from './components/WrongAnswer';
import React, { useState, useEffect } from 'react';
function App() {
    const [table, setTable] = useState([
        { isActive: true, value: 1 },
        { isActive: true, value: 2 },
        { isActive: true, value: 3 },
        { isActive: true, value: 4 },
        { isActive: true, value: 5 },
        { isActive: true, value: 6 },
        { isActive: true, value: 7 },
        { isActive: true, value: 8 },
        { isActive: true, value: 9 },
        { isActive: true, value: 10 }
    ]);
    useEffect(() => { }, [table])
    const toggleActive = (index) => {
        const updatedTable = table.map((element) => {
            if (element.value === index) {
                return { ...element, isActive: !element.isActive };
            }
            return element;
        });
        setTable(updatedTable);

    }
    return (
        <>
            <Calculate table={table}/>
            <Option table={table} toggleActive={toggleActive} />
            <WrongAnswer />
        </>
    );
}

export default App;
