const getHome = (req, res) => {
  res.json({ message: 'Hello World!' });
};

module.exports = {
  getHome
};