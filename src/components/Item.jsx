import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Item = (props) => {
    const { valuesFromInput, onRemove } = props;

    return (
        <div>{
            valuesFromInput.map((item, index) => {
                return (
                    <div className="todo-item" key={uniqid()}>
                        <div className="row">
                            <div className="col-auto">
                                <button className={cn("btn", "btn-primary", "btn-sm")}
                                        type="button"
                                        onClick={onRemove(index)}>-</button>
                            </div>
                            <div className="col">{item}</div>
                        </div>
                    </div>
                )
            })
        }</div>
    )

};

Item.propTypes = {
    valuesFromInput: PropTypes.array,
    onRemove: PropTypes.func
};

export default Item;