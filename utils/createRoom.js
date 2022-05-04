import twiloClient from "./twiloClient"
export default CreateRom = async (roomName) => {
  const room = twiloClient.video.rooms.create({
    uniqueName: roomName,
  })
  console.log(room)
  return await room
}