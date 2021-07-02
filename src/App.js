import './App.css';

import { Comp1, Comp2 } from './Multi';
import React, { useState } from 'react';

import Biodata from './Biodata';
import Contact from './Contact';
import Experience from './Experience';
import Grocery from './Grocery';
import Header from './Header';
import Recipe from './Recipe';
import Row from './Row';

function App() {
  const [hobby, setHobby] = useState("Movie");

  return (
    <React.Fragment>
      <Header title="React JS Training"></Header>
      <table>
        <tbody>
          <Row></Row>
        </tbody>
      </table>
      <Contact name="Arif Setyo"></Contact>
      <br />
      <br /><br />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "50%" }}>
              <Biodata hobby={hobby}></Biodata>
              <button onClick={() => setHobby("Music")}>Change the hobby</button>
            </td>
            <td style={{ width: "50%" }}>
              <Experience></Experience>
            </td>
          </tr>
          <tr>
            <td>

            </td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              <Recipe></Recipe>
            </td>
            <td>
              <Grocery></Grocery>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
