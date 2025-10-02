import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
      <section id="invite-note">
          <div className="invite-note-wrapper">
              <h5>An Invitation from:</h5>
              <h2>Mrs. & Mr. G. Khaleel Sahab</h2>

              {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
              <h5 className="address mb-3">
                  H.NO.: 1/670, Khooni Mohallah,
                  <br /> Adoni, Kurnool Dist.,
                  <br /> Andhra Pradesh - 518 301.
              </h5>
              <p className="address">
                  Contact: <br />
                  +91 73966 62484,
                  <br />
                  +91 93986 23226.
              </p>
          </div>
      </section>
  );
}

export default InviteNote;
