var express = require('express');
var router = express.Router();
var Exam = require('../model/Exam').Exam;

router.get('/exams', function(req, res) {
	Exam.find({}, function(err, exams) {
		if(err) {
			return res.json({ err: err })
		}
		return res.json(exams);
	})
});

router.get('/exam/:id', function(req, res) {
	Exam.findById(req.params.id, function(err, exam) {
		if(err) {
			return res.json({ err: err })
		}
		return res.json(exam);
	})
})

router.post('/exams', function(req, res) {
	var e = new Exam(res.params);
	e.save(function(err) {
		if(err) {
			return res.json(err)
		}
		res.json(e);
	})
});

router.put('/exam/:id', function(req, res) {
	Exam.findOneAndUpdate({_id: req.params.id }, req.body, {upsert: true}, function(err, exam) {
		if(err) {
			return res.json({ err: err });
		}
		res.json(exam);
	})
})

router.delete('/exam/:id', function(req, res) {
	Exam.deleteOne({ _id: req.params.id }, function(err, exam) {
		if(err) {
			return res.json({ err: err });
		}
		res.json(exam);
	})
})

module.exports = router;