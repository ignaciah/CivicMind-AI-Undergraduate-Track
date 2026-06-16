import express from "express";
import environmentRoute from "./api/environment.js";
import communityRoute from "./api/community.js";
import productivityRoute from "./api/productivity.js";

const app = express();
app.use(express.json());

app.use("/environment", environmentRoute);
app.use("/community", communityRoute);
app.use("/productivity", productivityRoute);

app.listen(3001, () => console.log("Backend running on port 3001"));
