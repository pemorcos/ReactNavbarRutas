import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children, auth}) => {

    if (auth) {
        return children;
    } else {
        return <Navigate to = "/" />
    }
}

export default ProtectedRoute