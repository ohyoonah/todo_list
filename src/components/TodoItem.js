import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdOutlineStarOutline,
  MdOutlineStar,
  MdModeEditOutline,
} from "react-icons/md";
import { onChecked, onImportant, onRemove } from "../modules/todoSlice";

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;
  ${({ important }) => important && `font-weight: 600;`}

  .checkBox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--black);
    .check {
      color: var(--blue);
    }
    .itemText {
      flex: 1;
      margin-left: 1rem;
    }
    .itemCheckText {
      flex: 1;
      margin-left: 1rem;
      text-decoration: line-through;
      color: var(--blue-gray);
    }
  }
`;

const TodoImportant = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-right: 0.8rem;
  color: var(--yellow);
`;

const TodoItemEdit = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-right: 0.8rem;
  color: var(--blue-gray);
`;

const TodoItemRemove = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: var(--light-red);
`;

const TodoItem = ({ todo, onChangeSelectedTodo, setIsEdit }) => {
  const { id, text, checked, important } = todo;
  const dispatch = useDispatch();

  return (
    <TodoItemBox important={important}>
      <div className="checkBox" onClick={() => dispatch(onChecked(id))}>
        {checked ? (
          <>
            <MdCheckBox className="check" />
            <div className="itemCheckText">{text}</div>
          </>
        ) : (
          <>
            <MdCheckBoxOutlineBlank />
            <div className="itemText">{text}</div>
          </>
        )}
      </div>
      <TodoImportant onClick={() => dispatch(onImportant(id))}>
        {important ? <MdOutlineStar /> : <MdOutlineStarOutline />}
      </TodoImportant>
      <TodoItemEdit
        onClick={() => {
          onChangeSelectedTodo(todo);
          setIsEdit(true);
        }}
      >
        <MdModeEditOutline />
      </TodoItemEdit>
      <TodoItemRemove>
        <MdRemoveCircleOutline onClick={() => dispatch(onRemove(id))} />
      </TodoItemRemove>
    </TodoItemBox>
  );
};

export default TodoItem;
