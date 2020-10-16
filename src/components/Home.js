import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{textAlign:"center"}}><h2>Shoein Gallery</h2><br/> </div> 
                <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', width: '100vw', height: '100vh', alignItems: 'center'}}>
                    <img src="https://cdn.vox-cdn.com/thumbor/SKljOF0-2E0JV79_r_3k8qs62zM=/0x0:6720x4480/1200x800/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/58617409/PHOTO_CREDIT__Giulia_White__2F_GOAT.0.jpg" alt="Shoe Storage"/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
