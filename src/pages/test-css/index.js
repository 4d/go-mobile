import React from "react";
import Layout from "@theme/Layout";
import styles from "./test.module.css";

function Hello() {
  return (
    <Layout title="Hello">
      <div>
        <div className={styles.navbar}>Navbar</div>
        <div className={styles.heading}>
          <h1>Hi!</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "20px",
          }}
        >
          <p>
            This is a test page created from{" "}
            <code>pages/test-css/index.js</code>
            <br />
            Edit the <code>test.module.css</code> file and reload to see the
            changes.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;
