type placeholderText = {
    children : string
}
export const Heading =(props:placeholderText) => {
    return (
        <div>
            {props.children}
        </div>
    )
}