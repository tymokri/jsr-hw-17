import React, {useState} from "react";
import TodoItem from "./TodoItem";
import uniqid from "uniqid";
import PropTypes from "prop-types";


const TodoBox = () => {
    const [todo, setTodo] = useState('');
    const [valuesFromInput, setValuesFromInput] = useState([]);
    const [isDisabled, setDisabled] = useState(true);

    const handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        if (target) {
            setDisabled(false);
        }
        setTodo(value);
    }

    const handleInputAdd = (event) => {
        event.preventDefault();
        valuesFromInput.unshift(todo);

        setValuesFromInput(valuesFromInput);
        setTodo('');
        setDisabled(true);
    }

    const handleRemove = (index) => (event) => {
        event.preventDefault();

        setValuesFromInput(
            valuesFromInput.filter((todo, i) => i !== index)
        );
    }

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text"
                               name="text"
                               value={todo}
                               onChange={handleInputChange}
                               required=""
                               className="form-control"
                               placeholder="I am going..."/>
                    </div>
                    <button type="submit"
                            disabled={isDisabled}
                            className="btn btn-primary"
                            onClick={handleInputAdd}>add</button>
                </form>
            </div>

            <div>{
                valuesFromInput.map((item, index) => {
                    return (
                        <TodoItem
                            onRemove={handleRemove}
                            index={index}
                            value={item}
                            key={uniqid()}
                        />
                    )
                })
            }</div>
        </div>
    );
};

TodoItem.propTypes = {
    valuesFromInput: PropTypes.array,
};

export default TodoBox;