import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur
        nulla dicta enim obcaecati ratione harum saepe necessitatibus sequi, est
        dolorum minus ullam. Eum sit repellendus corrupti harum dicta officiis.
        Temporibus fugiat, molestias illo quidem vitae perspiciatis quos aut
        alias, eligendi aliquam excepturi rerum sequi amet quis sunt modi odit
        quibusdam doloribus! Adipisci quas perspiciatis ab atque impedit nulla
        molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur
        nulla dicta enim obcaecati ratione harum saepe necessitatibus sequi, est
        dolorum minus ullam. Eum sit repellendus corrupti harum dicta officiis.
        Temporibus fugiat, molestias illo quidem vitae perspiciatis quos aut
        alias, eligendi aliquam excepturi rerum sequi amet quis sunt modi odit
        quibusdam doloribus! Adipisci quas perspiciatis ab atque impedit nulla
        molestias.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default About;
