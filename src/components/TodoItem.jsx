import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';


const TodoItem = (props) => {
    const { value, index, onRemove } = props;

    return (
        <div>{
            <div className="todo-item">
                <div className="row">
                    <div className="col-auto">
                        <button className={cn("btn", "btn-primary", "btn-sm")}
                                type="button"
                                onClick={onRemove(index)}>-</button>
                    </div>
                    <div className="col">{value}</div>
                </div>
            </div>
        }</div>
    )
};

TodoItem.propTypes = {
    onRemove: PropTypes.func
};

export default TodoItem;