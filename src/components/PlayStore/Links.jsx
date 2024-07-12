import React from 'react'
import WatchGif from './WatchGif'
import { Store } from './StyledStore'
import play from '../PlayStore/images/google_play.png'
import apple from '../PlayStore/images/apple_store.png'

function Links() {
    return (
        <>
            <WatchGif />
            <Store>
                <div className="right">
                    <h1>Subscribe to our awesome emails.</h1>
                    <h4>Get our latest offers and news straight in your inbox.</h4>
                    <div className="input">
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="left">
                    <h1>Download Our Apps</h1>
                    <h4>Shop our products and offers on-the-go.</h4>
                    <div className="app">
                        <img src={play} alt="" />
                        <img src={apple} alt="" />
                    </div>
                </div>
            </Store>
        </>
    )
}

export default Links;