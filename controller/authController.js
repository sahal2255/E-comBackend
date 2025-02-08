const jwt=require('jsonwebtoken')
const {generateAccessToken,generateRefreshToken}=require('../utils/jwtUtils')

const refreshToken = (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.status(401).json({ message: 'Unauthorized' });
  
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid refresh token' });
  
      const newAccessToken = generateAccessToken(user);
      res.cookie('accessToken', newAccessToken, { httpOnly: true, secure: true, sameSite: 'strict' });
  
      res.json({ success: true });
    });
  };

module.exports={refreshToken}