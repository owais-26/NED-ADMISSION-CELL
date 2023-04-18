// import React, { useState, useEffect } from "react";
import axios from "axios";
const Req = axios.create({
  baseURL: `https://tired-crow-leather-jacket.cyclic.app/api`,
});
export default Req;