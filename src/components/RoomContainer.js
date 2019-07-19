import React from "react"
import { withRoomConsumer } from "../context"
import Loading from "./Loading"
import RoomList from "./RoomList"
import RoomFilter from "./RoomsFilter"
import RoomsFilter from "./RoomsFilter";

function RoomContainer ({context}){
    const { loading, sortedRooms, rooms} = context;
    if (loading) return <Loading/>
    return (
        //Filtering out the rooms
        //<RoomsFilter rooms={rooms}/>

        //After filtering out the rooms .i.e. sortedRooms    
        //<RoomList rooms={sortedRooms}/>
        <> 
            <RoomsFilter rooms={rooms}/>  
            <RoomList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer);