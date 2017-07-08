var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
	question: {
		type: String,
		required: true
	},
	hasMultipleAnswers: {
		type: Boolean,
		default: false
	}
})

module.exports = {
	QuestionSchema: QuestionSchema,
	Question: mongoose.models.Question || mongoose.model('Question', QuestionSchema)
};