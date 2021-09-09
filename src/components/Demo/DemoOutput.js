import React from 'react';
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {

    console.log('DemoOutput RUNNING!');
    return (
        <MyParagraph>{props.show ? 'This is Demo' : ''}</MyParagraph>
    )

};

// compare new and previous props values. if no change, no re-render
export default React.memo(DemoOutput);