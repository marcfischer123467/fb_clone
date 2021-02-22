import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'

function Feed() {
    return (
        <div classname='feed'>
         <StoryReel />
         <MessageSender />
         <Post />
        </div>
    )
}

export default Feed
