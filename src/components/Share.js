import React from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

const Share = () => {
  return (
    <div style={{
      background: '#0000',
      height: '100vh',
      width: '100%',
    }}>
      <h1>How to use React Share NPM</h1></h1>
      <FacebookShareCount url={shareUrl}>
      {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
    </FacebookShareCount>
    
    </div >
  )
}

export default Share