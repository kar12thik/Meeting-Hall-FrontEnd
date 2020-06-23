import React from 'react'
import RoomCreateDialog from '../components/CreateRoomButton/RoomCreateDialog'
import RoomBookDialog from '../components/BookRoomButton/RoomBookDialog'
import Content from '../components/Contents/Content'

function Home() {
  return (
    <>
      <Content />
      <RoomCreateDialog />
      <RoomBookDialog />
    </>
  )
}

export default Home
