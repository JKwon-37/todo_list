import React, {useState} from 'react'

//initial todo list
// const myTodoList = [
//     'Pass the belt exam',
//     'Finish all core assignments',
//     'Submit a MVP project',         // didn't use this array
//     'Catch up on One Piece',
//     'Find a studio apartment'
// ];

export default function TodoList() {
    const [list, setList] = useState([
        // {item:"Catch up on One Piece", checked: false},{item:"Watched latest episode of Spy x Family", checked:false},{item:"Finish Todo assignment", checked: false}
    ])
    const [inputVal, setInputVal] = useState('');
    const [inputError, setInputError] = useState('');

    // function to add a string to todolist
    function addToList(e) {
        e.preventDefault();
        console.log(e);
        if (inputVal.length < 1) {
            return setInputError('Todo list item cannot be blank!')
        } else if ( inputVal.length < 5) {
            return setInputError('Must be longer than 5 characters!')
        }
        setInputError('')
        const updateList = [...list];
        updateList.push({item: inputVal, checked: false});
        setList(updateList);
        setInputVal('');
        // console.log(updateList)
    }

    function handleCheck (e) {
        const checkBox = list.map((item, id) => {
            if (id === e) {
                const updatedList = {...item,checked: !item.checked} // Change the boolean value to opposite
                return updatedList
            }
            return item
        })
        setList(checkBox);
        // console.log(e.target.checked);
    }

    // function to delete list item grabbed by the index
    function handleDelete(i) {
        console.log(i);
        const deleteListItem = list.filter(( id) => {
                return id !== i;
        })
        setList(deleteListItem);
        // console.log('clicked')
    }

    return (
        <div style={{margin:'40px', textAlign:'center', fontFamily:'sans-serif'}}>
            <h1 style={{color:'orange'}}>My Todo List</h1>
            <form onSubmit={addToList}> 
                <p>Type in what you want to add to your todo list below.</p>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                {inputError && <p style={{color:'red'}}>{inputError}</p>}
                <button>Add to list</button>
            </form>

            {list.map((value, i) => 

                <form key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <p className={value.checked ? 'line-through' : ''}>{value.item}</p>
                        <input type="checkbox" checked={value.checked} onChange={(e) => handleCheck(i)}/>
                    </div>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </form>
            )}
            {JSON.stringify(list)}
        </div>

    );
}