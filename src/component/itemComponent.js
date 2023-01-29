// 사진, 타이틀 => 해당 url로 이동하게

import React from "react";
import img from "../dummy/img.png"
import heart from "../dummy/heart.png";
import search from "../dummy/search.png"
import "./itemComponent.css"
import {useState} from "react";

export default function ItemComponent() {
    // const [image, setImage] = useState();
    // const [title, setTitle] = useState();
    const [clicked, setClicked] = useState(false);
    const [buttonImage, setButtonImage] = useState(heart);

    console.log(clicked);
    function heartToggle() {
        setClicked(!clicked);
        if (clicked == false) {
            //빈하트
            console.log(clicked);
            setButtonImage(heart);
        }
        else {
            //찬 하트
            console.log(clicked);
            setButtonImage(search);
        }
    }

    return (
        <>
            <div className="item">
                <img className="img" src={img}/>
                <button type="button" className="heart" onClick={heartToggle}><img src={buttonImage}/></button>
                <p className="title"> this is title</p>
            </div>
        </>
    )
}