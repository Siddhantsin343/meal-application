import { useRouteError } from "react-router-dom";
const Error = ()=>{
const err = useRouteError();
    return (
        <>
        <h1>
            Opps !!! Something Went wrong!!!
        </h1>
        <img src="https://tse2.mm.bing.net/th/id/OIP.UxMv9AkWtnERAvmcoFI2AQHaFj?pid=Api&P=0&h=180" alt="image"></img>
        <h3>{err.status} : {err.statusText}</h3>
        </>
        )
    }

export default Error;