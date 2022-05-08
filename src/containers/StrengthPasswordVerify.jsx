import React, {useState, useEffect} from 'react';
import zxcvbn from 'zxcvbn';

const StrengthPasswordVerify = ({password}) => {

  const testResult = zxcvbn(password);

  const [strength, setStrength] = useState(testResult.score);

  const viewPasswordLevel = () => {
    switch(testResult.score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak'
      case 2:
        return 'Fear'
      case 3:
        return 'Good'
      case 4:
        return 'Strong'
      default:
        return
    }
  }

  const colorStrength = () => {
    switch(testResult.score) {
      case 0:
        return ''
      case 1:
        return 'paint red'
      case 2:
        return 'paint orange'
      case 3:
        return 'paint yellow'
      case 4:
        return 'paint green'
      default:
        return
    }
  }

  useEffect(() => {
    setStrength(testResult.score);
  }, [testResult])
  console.log(testResult);
  
  return (
    <div className="StrengthPasswordVerify">
      <div className="progress-bar">
        <div
          className={`one ${colorStrength()}`}
        ></div>
        <div
          className={`two ${colorStrength()}`}
        ></div>
        <div
          className={`three ${colorStrength()}`}
        ></div>
        <div
          className={`four ${colorStrength()}`}
        ></div>
      </div>
      <span className="state">{viewPasswordLevel()}</span>
    </div>
  );
}

export default StrengthPasswordVerify;