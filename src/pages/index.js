import { Button } from "@mui/material";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  return (
    <div style={{ padding: 30 }}>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <img src={user.photoURL} alt="Profile" width="100" />
        </div>
      ) : (
        <Button variant="contained" onClick={handleLogin}>
          Sign in with Google
        </Button>
      )}
    </div>
  );
}
