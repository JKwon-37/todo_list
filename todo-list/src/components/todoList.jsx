import React, {useState} from 'react'

//initial todo list
const myTodoList = [
    'Pass the belt exam',
    'Finish all core assignments',
    'Submit a MVP project',
    'Catch up on One Piece',
    'Find a studio apartment'
];

export default function TodoList() {
    const [inputVal, setInputVal] = useState('');
    const [checkItem, setCheckItem] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('click')
    }

    function handleDelete(e) {
        e.preventDefault();
        console.log('clicked')
    }

    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <button>Add to list</button>
            </form>
            {inputVal}
            {myTodoList.map((value, i) => 
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <p key={i}>{value}</p>
                    <label key={i}>
                        <input type="checkbox" checked={checkItem} onChange={e => setCheckItem(e.target.checked)}/>
                    </label>
                    <input key={i} type="submit" value='Delete' onClick={handleDelete}/>
                </div>
            )}
        </div>

    );
}