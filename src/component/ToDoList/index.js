import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    datas: PropTypes.array,
    onClickData: PropTypes.func,
};

ToDoList.defaultProp = {
    datas: [],
    onClickData: null,
};

function ToDoList(props) {

    const {datas,onClickData} = props;

    return (
        <div>
            <ul>
                {datas.map(e=>(
                    <li 
                        key={e.id} 
                        onClick={()=>{onClickData(e)}}
                    >
                        {e.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

