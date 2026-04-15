import { useRouteError, Link } from "react-router-dom";

export function CareersError(){
    const error = useRouteError();

    return(
    <div>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to HomePage</Link>
    </div>
    )
}