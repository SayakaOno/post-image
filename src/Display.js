import moment from 'moment';
import './App.css';

const startDate = '2021-04-04';
const day = moment().diff(moment(startDate), 'days') + 1;

const Display = ({ text }) => {
  return (
    <div className="display">
      <div className="display__content">
        <div className="display__content__day">Day {day}</div>
        <div className="display__content__text">{text}</div>
      </div>
    </div>
  );
};

export default Display;
