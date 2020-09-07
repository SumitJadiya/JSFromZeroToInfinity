import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import { Title } from './Title'

export default class FeaturedRoom extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context
        console.log("rooms -> ", rooms)

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <div className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>

            </div>
        )
    }
}
