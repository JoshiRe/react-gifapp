import React, {useState} from 'react';
import PropTypes  from 'prop-types';

export const AddCategory = ({setCategory})=>{

    const[inputValue, setInput] = useState("");
    const changeValue = (e)=>{
        setInput(e.target.value);
    }

    const submit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 1){
            setCategory( cat => [inputValue, ...cat]);
            setInput("");
        }
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={inputValue} onChange={changeValue} />
        </form>
    )
};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
};