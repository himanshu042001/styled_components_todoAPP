// src/App.js
import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  width: 50%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.075);
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125rem rgba(66, 153, 225, 0.5);
  }
`;

const TaskList = styled.ul`
  margin-top: 2rem;
`;

const TaskItem = styled.li`
  background-color: #edf2f7;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const TaskTime = styled.span`
  color: #718096;
`;

function App() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task && time) {
      setTodos([...todos, { task, time }]);
      setTask('');
      setTime('');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>To-Do List</Title>
        <FormGroup>
          <Label htmlFor="task">Task</Label>
          <Input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Time</Label>
          <Input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time for the task"
          />
        </FormGroup>
        <Button onClick={addTodo}>Add to To-Do List</Button>
        <TaskList>
          {todos.length === 0 ? (
            <p>No tasks added yet.</p>
          ) : (
            todos.map((todo, index) => (
              <TaskItem key={index}>
                <span>{todo.task}</span>
                <TaskTime>{todo.time}</TaskTime>
              </TaskItem>
            ))
          )}
        </TaskList>
      </Wrapper>
    </Container>
  );
}

export default App;
