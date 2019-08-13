import React, { Component } from 'react';
import './styles.css'
import joao from '../../images/joao.jpg'
import matheus from '../../images/mat.jpg'
import pedro from '../../images/pedro.jpg'

export default class Founders extends Component {
    state = {
        founders: ['Pedro Henrique Faria Teixeira',
                   'João Daniel de Aquino Rufino', 
                   'Matheus Silveira'],
        images: [pedro,joao,matheus]
        }


    render() {
        const {founders,images} = this.state;
        const i = 0;
        console.log(founders,images);
        return (
        <div className="founders-list">
            {founders.map((founders,index) => (
                <div className="founder-layout"> 
                    <div className="image_div">
                        <img src={images[index]} id="images_founders"/>
                    <article>{founders}</article>
                    </div>
                </div>

            ))}
        </div>
        );
    }
}
