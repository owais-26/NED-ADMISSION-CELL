// import React, { useState, useEffect } from "react";
import axios from "axios";
const Req = axios.create({
  baseURL: `https://nac-backend.vercel.app/api`,
});
export default Req;
