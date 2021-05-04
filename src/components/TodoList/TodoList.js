import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { Todo } from "../index";

import Paper from "@material-ui/core/paper";
import Divider from "@material-ui/core/Divider";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";
import useStyles from "./styles";

const TodoList = (props) => {
  const classes = useStyles(props);
  const { todos, removeTodo, toggleTodo, editTodo } = props;

  if (todos.length)
    return (
      <Paper className={classes.root}>
        <List>
          {todos.map((todo, i) => {
            return (
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                index={i}
                listLength={todos.length}
              />
            );
          })}
        </List>
      </Paper>
    );
  return null;
};

// TodoList.propTypes = {
//   // classes: PropTypes.object.isRequired,
//   todos: PropTypes.array.isRequired,
// };

export default TodoList;
