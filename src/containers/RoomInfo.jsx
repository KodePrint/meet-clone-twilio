import React from 'react'
import CreateRoom from '../components/CreateRoom';

const RoomInfo = (props) => {
  return (
    <div className='RoomInfo row'>

      <div className='col'>
        <h1>{props.event}</h1>
        <CreateRoom/>
      </div>

    </div>
  );
}

export default RoomInfo;