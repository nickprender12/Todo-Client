import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from '../../hooks/useToggleState';
import { EditTodoForm } from '../index';
import Divider from '@material-ui/core/Divider';

import { useDispatch } from 'react-redux';
import { todoUpdated } from '../../features/todo/todosSlice';

const Todo = (props) => {
  const {
    title,
    status,
    // removeTodo,
    id,
    index,
    listLength,
  } = props;
  const [isEditing, toggle] = useToggleState(false);

  const dispatch = useDispatch();

  return (
    <>
      <ListItem style={{ height: '64px' }} key={id}>
        {isEditing ? (
          <>
            <EditTodoForm id={id} toggle={toggle} />
            <>
              <IconButton aria-label="Delete" disabled>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditIcon aria-label="Edit" onClick={toggle} />
              </IconButton>
            </>
          </>
        ) : (
          <>
            <CheckBox
              tabIndex={-1}
              checked={status}
              onClick={() => {
                dispatch(todoUpdated({ id: id, title, status: !status }));
              }}
            />
            <ListItemText
              style={{ textDecoration: status ? 'line-through' : 'none' }}
            >
              {title}
            </ListItemText>
            <ListItemSecondaryAction>
              {/* <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton> */}
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
      {index < listLength - 1 && <Divider />}
    </>
  );
};

export default Todo;
