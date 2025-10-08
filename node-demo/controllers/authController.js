const login = (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  
  res.json({ message: 'Login successful', user: { email } });
};

module.exports = {
  login
};