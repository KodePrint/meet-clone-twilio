import React from 'react'
import RoomInfo from '../containers/RoomInfo';

const CreateOrJoinRoom = () => {
  return (
    <div className="CreateOrJoinRoom container">
      <RoomInfo event="Create Room" />
    </div>
  );
}

export default CreateOrJoinRoom;