import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>Oops!</h1>
            <h2>{err.status}:{err.statusText}</h2>
            <h3>Something went wrong</h3>
        </div>
    )
}

export default Error;