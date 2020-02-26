const bcrypt = require("bcryptjs"); // <<<<<<<<<<<<<<<< npm i bcryptjs
const router = require("express").Router();

const Users = require("../users/model");

router.post("/register", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 12); // << 1

  user.password = hash; // <<<<<<<<<<<<<<<<<<<<<<<<<<<< 2

  Users.add(user)
    .then(saved => {
      req.session.loggedIn = true;
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
     if(user && bcrypt.compareSync(password, user.password)) {
       req.session.loggedIn = true;
       req.session.user = user.username;
        res.status(200).json({ message: `Sup ${user.username}!` })
      } else{
        res.status(401).json({ message: "Invalid" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
