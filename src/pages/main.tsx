import React from "react";
import { ItemListComponent } from "../component/ItemListComponent"
import "./main.css"
// import { SlideComponent} from "../component/slideComponent";

export function Main() {
    return (
        <>
            <div className="body">
                <div className="left">
                    <div className="top">
                        {/*slider*/}
                        <div className="slider">
                        </div>
                        <div className="mini">
                            {/*banner*/}
                        </div>
                    </div>
                    <div className="bottom">
                        {/*banner*/}
                    </div>
                    <div className="recommend">
                        <p>추천 게시물</p>
                        <ItemListComponent/>
                    </div>
                    <div className="theme">
                        <p>테마 게시물</p>
                        <ItemListComponent/>
                    </div>
                </div>
            </div>
            <div className="side">
                {/*banner*/}
            </div>
            {/*<SlideComponent/>*/}
        </>
    )
}