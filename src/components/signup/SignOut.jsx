import { useDispatch, useSelector } from "react-redux";
import { signout, selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase";

function SignOut() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(signout());
    auth.signOut();
  };

  return (
    <div className="header">
      {user ? (
        <button onClick={logoutOfApp} type="button">
          Logout
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignOut;
