const Questions = require('../models/Questions');

// query the database without graphql

module.exports = {
  async getQuestions(req, res) {
    const questionData = await Questions.findOne({ order: 1 }).exec();
    res.json(questionData)
  }};