import {useRouteError, isRouteErrorResponse} from  "react-router-dom";

type RouteError = {
  status: number;
  statusText: string;
};

const ErrorPage = () => {
    const err = useRouteError() as RouteError;
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong!</h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>
        </div>
    )
}

export default ErrorPage;