import React, { useRef, useState } from "react";
import IdelTimer from "react-idle-timer";

import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimeContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const idealTimeRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdel = () => {
    console.log("Idel users");
    setmodalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logout, 5000);
  };

  const stayActive = () => {
    setmodalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  };

  const logout = () => {
    setmodalIsOpen(false);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Logged In User</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>Idel For a while</h2>
        <p>Logged out soon...</p>
        <div>
          <button onClick={logout}>Log me</button>
          <button onClick={stayActive}>Log Out</button>
        </div>
      </Modal>
      <IdelTimer ref={idealTimeRef} timeout={5000} onIdle={onIdel}></IdelTimer>
    </div>
  );
}

export default IdleTimeContainer;
