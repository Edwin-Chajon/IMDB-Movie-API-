

module.exports = (req, res, next) => {

if(req.session && req.session.loggedIn) {
  next();
} else {
  res.status(401).json({ Pirate: "NAY!!" });
}

  /*
  let { username, password } = req.headers;

  username && password ?
    Users.findBy({ username })
      .first()
      .then(user => {
        user && bcrypt.compareSync(password, user.password) ?
          next()
        : res.status(401).json({ message: "Invalid Credentials" });
        
      })
      .catch(({ name, message, stack }) => {res.status(500).json({ name, message, stack })})
    :
    res.status(400).json({ error: "please provide credentials" });
  */
};
