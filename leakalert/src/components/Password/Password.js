import React, { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

const ResetPassword = ({ email }) => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const functions = getFunctions();

  const handlePasswordReset = async () => {
    const updatePassword = httpsCallable(functions, "updatePassword");
    const result = await updatePassword({ email, newPassword });

    if (result.data.success) {
      setMessage("Password reset successfully. You can now log in with the new password.");
    } else {
      setMessage(result.data.message);
    }
  };

  return (
    <div className='signup-wrapper'>
            <div className='signUp'>
                <div className='content' style={{ marginTop: '30px' }}>
                    <h1 style={{ color: 'white', margin: '0', textAlign: 'center' }}>Forgot Password?</h1>
                    <p style={{ color: 'white', margin: '0', textAlign: 'center', fontSize: '13px' }}>
                        No worries we would send you a reset instruction.
                    </p>
                </div>
                <form className='form'>
                    <div className="reset">
                        <h2>Reset Password</h2>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter your new password"
                        />
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                        <button onClick={handlePasswordReset}>Reset Password</button>
                        <p>{message}</p>
                    </div>
                </form>
  
            </div>
        </div>

  );
};

export default ResetPassword;
