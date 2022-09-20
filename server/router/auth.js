const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const User = require("../model/userSchema");
const cookieParser = require("cookie-parser");

const bcrypt = require("bcryptjs");
const { response } = require("express");
router.use(cookieParser());
router.get("/", (req, res) => {
  res.send(`Hello from the server`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, organisation, password, cpassword } = req.body;

  if (!name || !email || !phone || !organisation || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "Please fill all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "passwords are not matching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        organisation,
        password,
        cpassword,
      });
      // yeha pe
      await user.save();
      res.status(201).json({ message: "user registered successfuly" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz Fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials " });
      } else {
        // need to genereate the token and stored cookie after the password match
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.json({ token, message: "user Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials " });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  try {
    if (req.rootUser) {
      res.send(req.rootUser);
    } else throw error;
  } catch (err) {
    res.send(err);
  }
});


// Logout  ka page 
router.get('/logout', (req, res) => {
  console.log(`Hello my Logout Page`);
  res.clearCookie('jwtoken', { path: '/' });
  res.status(200).send('User lOgout');
});

module.exports = router;
