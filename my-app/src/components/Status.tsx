type StatusProps = {
    status:'isLoading' | 'isError' | 'isSuccess'
}
export const Status = (props:StatusProps) =>{

    console.log(props.status)
    return (
        <div>
            {props.status === 'isLoading' &&
                        <h1>Loading...</h1>
            }
                        {props.status === 'isSuccess' &&
                                 <h1>Data fetched successfully..</h1>
            }
                        {props.status === 'isError' &&
                           <h1>Error fethcing data...</h1>
            }

        </div>
    )
}