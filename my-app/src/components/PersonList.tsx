/*array props */
type NameList = {
    names : {
        firstName : string,
        lastName : string
    }[]
}
export const PersonList = (props:NameList) =>{
    return (
        <div>
  
            {props.names.map(name=>{
                return(
                    <h1>{name.firstName}{name.lastName}</h1>
                )
            })}

        </div>
    )
}