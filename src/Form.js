import { Input, Button } from 'antd';
import './App.css';

const { TextArea } = Input;

const Form = ({ text, setText }) => {
  const onClear = () => {
    setText('');
  };

  const onComplete = () => {
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
      <div className="form__buttons">
        <Button onClick={onClear}>Clear</Button>
        <Button onClick={onComplete}>Done</Button>
      </div>
    </div>
  );
};

export default Form;
