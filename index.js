const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path");
const cookieParser=require("cookie-parser");
const { render } = require("ejs");
const URL = require("./models/url");
const {restrictToLoginUserOnly}=require("./middlewares/auth");




const urlRoute = require('./routes/url');
const staticRoute=require("./routes/staticRouter");
const userRoute = require('./routes/user');


const app = express();
const PORT = 8000;
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("mongoDB connected...!"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());



app.set("view engine", "ejs");
 app.set('views', path.resolve("./views"));

app.use("/url",restrictToLoginUserOnly, urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }

            }
        }
    );
    res.redirect(entry.reddirectURL);
});

app.listen(PORT, () => console.log(`Server started at PORT :${PORT}`));