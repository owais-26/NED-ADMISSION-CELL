// import React, { useState, useEffect } from "react";
import axios from "axios";
const Req = axios.create({
  baseURL: `https://fine-erin-giraffe-tie.cyclic.app/api`,
});
export default Req;