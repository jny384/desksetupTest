import React from "react";
import img from "../dummy/img.png"
import heart from "../dummy/heart.png";
import redheart from "../dummy/redheart.png";
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
            setButtonImage(redheart);
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