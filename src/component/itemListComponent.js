import React from "react";
import ItemComponent from "./itemComponent";
import "./itemListComponent.css";

export default function ItemListComponent() {
    return (
        <>
            <div className="list">
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                {/*<ItemComponent/>*/}
                {/*<ItemComponent/>*/}
            </div>
        </>
    )
}