import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {

    console.log('DemoOutput RUNNING!');
    return (
        <MyParagraph>{props.show ? 'This is Demo' : ''}</MyParagraph>
    )

};

export default DemoOutput;