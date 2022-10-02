import React from 'react';

function TodoTable(props) {
  const itemRows = props.todos.map((todo, index) =>
    <tr key={index}>
      <td>{todo.date}</td>
      <td>{todo.description}</td>
      <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
    </tr>
  );

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
          {itemRows}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;