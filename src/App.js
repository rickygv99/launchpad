import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>Controls</h1>
      <div>
        <h2>Button</h2>
        <h3>Normal</h3>
        <Button theme="primary">Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="success">Success</Button>
        <Button theme="info">Info</Button>
        <Button theme="danger">Danger</Button>
        <Button theme="warning">Warning</Button>
        <h3>Outline</h3>
        <Button theme="primary" outline>Primary</Button>
        <Button theme="secondary" outline>Secondary</Button>
        <Button theme="success" outline>Success</Button>
        <Button theme="info" outline>Info</Button>
        <Button theme="danger" outline>Danger</Button>
        <Button theme="warning" outline>Warning</Button>
        <h3>Pill</h3>
        <Button theme="primary" pill>Primary</Button>
        <Button theme="secondary" pill>Secondary</Button>
        <Button theme="success" pill>Success</Button>
        <Button theme="info" pill>Info</Button>
        <Button theme="danger" pill>Danger</Button>
        <Button theme="warning" pill>Warning</Button>
        <h3>Pill Outline</h3>
        <Button theme="primary" pill outline>Primary</Button>
        <Button theme="secondary" pill outline>Secondary</Button>
        <Button theme="success" pill outline>Success</Button>
        <Button theme="info" pill outline>Info</Button>
        <Button theme="danger" pill outline>Danger</Button>
        <Button theme="warning" pill outline>Warning</Button>
      </div>
      <div>
        <h2>Input</h2>
        <h3>Text</h3>
        <Input type="text"></Input>
        <h3>Password</h3>
        <Input type="password"></Input>
        <h3>Email</h3>
        <Input type="email"></Input>
      </div>
      <div>
        <h2>Checkbox</h2>
        <Checkbox></Checkbox>
      </div>

      <h1>Containers</h1>
      <div>
        <h2>Card</h2>
        <Card>
          <p>Test Card</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
