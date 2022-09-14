import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";

function Apps() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Apps;
