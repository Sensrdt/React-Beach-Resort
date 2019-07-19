import React from 'react'
import Room from "./Room"

export default function RoomList({rooms}) {
    if (rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>No rooms as per your preferences </h3>
            </div>
        )
    }
    
    return (
        <section className="room-list">
            <div className="roomslist-center">
                {
                    rooms.map((item, index )=>{
                        return <Room key={index} room={item} />
                    }
                    )}
            </div>
        </section>
    )
}
