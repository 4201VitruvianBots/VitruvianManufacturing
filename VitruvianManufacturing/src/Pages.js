import "./App.css";


function Page(props) {
    return (
        <div className={props.selected ? "page selected" : "page"} id={props.id}>
            {props.children}
        </div>

    );
}

function SavePage(props) {
    return (
        <Page selected={props.selected} id="S">
            {/*
            TODO: Add content you want to be in the save page here
            */}
        </Page>
    );
}

export { SavePage };