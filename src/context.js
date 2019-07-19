import React, { Component } from 'react'
import items from './data'
import { log } from 'util';
const RoomContext = React.createContext();

 class RoomProvider extends Component {
    state = {
       rooms :[],
       sortedRooms :[],
       featuredRooms :[],
       loading :true,
       type : 'all',
       capacity : 1,
       price : 0,
       minPrice : 0,
       maxPrice : 0,
       mazSize : 0, 
       minSize : 0,
       breakfast : false,
       pets : false
    };
// After getting loaded
    componentDidMount(){
        // filtering out
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);

        let maxPrice = Math.max(...rooms.map(item => item.price))
        console.log("maxPrice " + maxPrice);
        let maxSize = Math.max(...rooms.map(item => item.size))
        console.log("maxSize " + maxSize);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading : false,
            price : maxPrice,
            maxSize,
            maxPrice
        })
        //console.log(rooms);
        
    }
// for Room.js 
    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }
// for SingleRoom.js 
    getRoom = ( slug ) =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }     
// for filtering out rooms
    handleChange = event => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name
        console.log(name, value);

        this.setState(
            {
                [name] : value
            },
            this.filterRooms
        );
    };

    filterRooms = () => {
        console.log("filter rooms calling");
        let{
            rooms, 
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state

        let tr = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        if (type !== 'all')
            tr = tr.filter(room => room.type === type)

        if (capacity != 1){
            tr = tr.filter(room => room.capacity >= capacity)
        }
        tr = tr.filter(room => room.price <= price)
        tr = tr.filter(room => room.size >= minSize && room.size <= maxSize);
        this.setState(
            {sortedRooms:tr}
        )
    }
    render() {
        return (
            <RoomContext.Provider 
            value = {{ ...this.state, 
                    getRoom:this.getRoom,
                    handleChange:this.handleChange 
                    }}>
                    {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

// Higher order components ( HOC )
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>

    }
}

export {RoomProvider, RoomConsumer, RoomContext};