import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Card from "./card"






export default function cardlayer() {
const array=[
{
img:im1,
title:"Title",
p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi sed, enim ipsum ratione sint libero non nulla possimus perferendis!"

},
{
    img:im1,
    title:"Title",
    p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi sed, enim ipsum ratione sint libero non nulla possimus perferendis!"
    
    },
    {
        img:im1,
        title:"Title",
        p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi sed, enim ipsum ratione sint libero non nulla possimus perferendis!"
        
        },
        {
            img:im1,
            title:"Title",
            p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi sed, enim ipsum ratione sint libero non nulla possimus perferendis!"
            
            },
            {
                img:im1,
                title:"Title",
                p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi sed, enim ipsum ratione sint libero non nulla possimus perferendis!"
                
                },
                {
                    img:im1,
                    title:"Title",
                    p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi sed, enim ipsum ratione sint libero non nulla possimus perferendis!"
                    
                    }



]


    return (
        <div className="container">
            <Row>

{

    array.map(item=>
   <Col xs={4}> <Card img={item.img} title={item.title} p={item.p} ></Card></Col>
    
    
    )
}




            </Row>
        </div>
    )
}
