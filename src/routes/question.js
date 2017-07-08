var express = require('express');
var router = express.Router();
var Question = require('../model/Question').Question;

router.get('/questions', function(req, res) {
	Question.find({}, function(err, questions) {
		if(err) {
			return res.json({ err: err })
		}
		return res.json(questions);
	})
});

router.get('/question/:id', function(req, res) {
	Question.findById(req.params.id, function(err, question) {
		if(err) {
			return res.json({ err: err })
		}
		return res.json(question);
	})
})

router.post('/questions', function(req, res) {
	var q = new Question(res.params);
	q.save(function(err) {
		if(err) {
			return res.json(err)
		}
		res.json(q);
	})
});

router.put('/question/:id', function(req, res) {
	Question.findOneAndUpdate({_id: req.params.id }, req.body, {upsert: true}, function(err, question) {
		if(err) {
			return res.json({ err: err });
		}
		res.json(question);
	})
})

router.delete('/question/:id', function(req, res) {
	Question.deleteOne({ _id: req.params.id }, function(err, question) {
		if(err) {
			return res.json({ err: err });
		}
		res.json(question);
	})
})

module.exports = router;