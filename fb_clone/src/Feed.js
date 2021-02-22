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
        <Post
        profile Pic="https://media-exp1.licdn.com/dms/image/C4E03AQESovl90BIvpA/profile-displayphoto-shrink_200_200/0/1612487148599?e=1619654400&v=beta&t=w4PjkOGsDcPs1z-UXuyHLZl1hlA73WXmFJa8eMWsofc"
        message= "Learning React and Firebase rn."
        timestamp= "late"
        username = 'Marc'
        image=""
        />
         <Post />
         <Post />
        </div>
    )
}

export default Feed
