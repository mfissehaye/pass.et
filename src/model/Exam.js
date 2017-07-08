var mongoose = require('mongoose');
var QuestionSchema = require('./Question').QuestionSchema;

var ExamSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	duration: {
		type: Number,
		default: 3600
	},
	questions: QuestionSchema
})

module.exports = {
	ExamSchema: ExamSchema,
	Exam: mongoose.models.Exam || mongoose.model('Exam', ExamSchema)
};