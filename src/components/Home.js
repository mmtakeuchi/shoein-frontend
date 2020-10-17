import React, { Component } from 'react'
import {Image} from 'react-bootstrap'

export class Home extends Component {
    render() {
        return (
            <div style={{margin:"15px"}}>
                <header style={{textAlign:'center'}}><h1>Shoein Gallery</h1></header> 
                <div >
                    <Image src="https://cdn.vox-cdn.com/thumbor/SKljOF0-2E0JV79_r_3k8qs62zM=/0x0:6720x4480/1200x800/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/58617409/PHOTO_CREDIT__Giulia_White__2F_GOAT.0.jpg" alt="Shoe Storage" fluid/>
                </div>
            </div>
        )
    }
}

export default Home
