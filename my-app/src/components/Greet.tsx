/*string,number,boolean props */
type GreetProps = {
    name:string,
    messageCount? : number, // making messageCount an optional prop
    isLoggedIn : boolean
}
export const Greet = (props:GreetProps) =>{

    const {messageCount = 0} = props;
    return(
        <div>
            {
                props.isLoggedIn ? 
                <h1>Welcome {props.name}!You have {props.messageCount} unread msgs</h1>
                :
                <h1>Welcome guest!</h1>
            }
            
        </div>
    )
}