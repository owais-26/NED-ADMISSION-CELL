// import React, { useState, useEffect } from "react";
import axios from "axios";
const Req = axios.create({
  baseURL: `http://localhost:8800/api`,
});
export default Req;