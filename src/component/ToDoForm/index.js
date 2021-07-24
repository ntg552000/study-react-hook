import React, { useState } from 'react';
import PropTypes from 'prop-types';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func
};

ToDoForm.defaultProps = {
    onSubmit: null
};

function ToDoForm(props) {
    const {onSubmit} = props;
    const [value,setValue] = useState('');

    function handleOnChange(e){
        setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(value);
        setValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' value={value}
                    onChange = {handleOnChange}
                >
                </input>
            </form>
        </div>
    );
}

export default ToDoForm;