import { Input, Button } from 'antd';
import './App.css';

const { TextArea } = Input;

const Form = ({ text, setText }) => {
  const onClick = () => {
    // scroll to the display
  };

  return (
    <div className="form">
      <p>Input text:</p>
      <TextArea
        placeholder="Text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button onClick={onClick}>Done</Button>
    </div>
  );
};

export default Form;
