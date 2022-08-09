import { useContext } from "react";
import { UserContext } from "../App";

const LogInButtons = () => {
  const { user, setUser } = useContext(UserContext);
  const isLoggedIn = user.loggedIn;

  return (
    <div className="text-end mt-4 me-4">
      <h3>{`isLoggedIn: ${isLoggedIn}`}</h3>
    </div>
  );
};

export default LogInButtons;
