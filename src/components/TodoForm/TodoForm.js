import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import PropTypes from "prop-types";
import useInputState from "../../hooks/useInputState";

const TodoForm = (props) => {
  const classes = useStyles(props);
  const { addTodo } = props;
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

// TodoForm.prototype = {
//   classes: PropTypes.object.isRequired,
//   addTodo: PropTypes.func.isRequired,
// };

export default TodoForm;
