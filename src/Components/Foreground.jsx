import React, { useRef } from "react"
import Card from "./Card"

export default function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum perspiciatis.',
            fileSize : ".9mb",
            close : true,
            tag : {isOpen : true, tagTitle: "Download Now", tagColor : "green"},
        },
        {
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum perspiciatis.',
            fileSize : ".9mb",
            close : true,
            tag : {isOpen : true, tagTitle: "Download Now", tagColor : "blue"},
        },
        {
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum perspiciatis.',
            fileSize : ".9mb",
            close : true,
            tag : {isOpen : true, tagTitle: "Download Now", tagColor : "green"},
        },
        {
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum perspiciatis.',
            fileSize : ".9mb",
            close : true,
            tag : {isOpen : true, tagTitle: "Download Now", tagColor : "green"},
        },
        {
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum perspiciatis.',
            fileSize : ".9mb",
            close : true,
            tag : {isOpen : true, tagTitle: "Download Now", tagColor : "green"},
        }
    ];

    return (
        <div>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
            {
                data.map((item,index)=>{
                    return(
                        <Card data={item} reference={ref} key={index}/>
                    )
                })
            }
            </div>
        </div>
    )
}