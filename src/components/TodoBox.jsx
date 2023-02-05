import React, {useState} from "react";
import Item from "./Item";

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

            <Item valuesFromInput={valuesFromInput} onRemove={handleRemove}/>
        </div>
    );
};

export default TodoBox;