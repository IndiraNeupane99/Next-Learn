// teacherRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Teacher dashboard' });
});

module.exports = router;
