import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            // url= 'https://www.youtube.com/watch?v=nLQ-9vfEjUI&ab_channel=CodeWithYd'
            url='video.mp4'
            width='800px'
            height='100%'
            controls = {true}
            playing
            />
        </div>
        )
    }
}

export default Video;