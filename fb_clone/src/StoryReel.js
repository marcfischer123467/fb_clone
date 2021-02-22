import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
        <Story image="https://i.ibb.co/5h8QZTH/Screen-Shot-2021-02-21-at-7-03-07-PM.png" 
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQESovl90BIvpA/profile-displayphoto-shrink_200_200/0/1612487148599?e=1619654400&v=beta&t=w4PjkOGsDcPs1z-UXuyHLZl1hlA73WXmFJa8eMWsofc"
        title="Marc" />
        
        <Story image="https://media.nature.com/lw800/magazine-assets/d41586-019-02087-5/d41586-019-02087-5_16903566.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg"
        title="Bill" />

        <Story image="https://miro.medium.com/max/1009/1*7kCZemEOdR_5K32Z7mtDCg.jpeg"
        profileSrc="https://i.ytimg.com/vi/UvauKbNiX7k/maxresdefault.jpg"
        title="Fei Fei" />
    </div>
    )
}

export default StoryReel
