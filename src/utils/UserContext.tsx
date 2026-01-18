import { createContext } from "react";

const UserContext = createContext<{
    loggedInUser: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}>({
    loggedInUser: "USER",
    setUserName: () => {},
});

export default UserContext;