import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";

export default class FeaturedRoom extends Component {
 static contextType = RoomContext ;  
    render() {
        let {loading, featuredRooms : rooms} = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        //console.log(rooms);
        return (
            <section className="featured-rooms">
                <Title title = "featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ?<Loading/>:rooms}
                </div>
            </section>
        )
    }
}
