import React, {useState} from 'react'
import PropTypes from 'prop-types'

//новый хук
function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value,
    }
}

function AddTodo ({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={{margin: '0 0 1rem .5rem'}} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type='submit' style={{marginLeft: '.5rem'}}>Add todo</button>
        </form>
    )
}

AddTodo.propTypes ={
    onCreate: PropTypes.func.isRequired
}

export default AddTodo