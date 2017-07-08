var expect = require('chai').expect;

var Exam = require('../src/model/Exam').Exam;
var Question = require('../src/model/Question').Question;

describe('Exam Model', function() {
	it('should be invalid if title is empty', function(done) {
		var e = new Exam();
		e.validate(function(err) {
			expect(err.errors.title).to.exist;
			done();
		})
	});

	it('should default to duration of 3600', function() {
		var e = new Exam();
		expect(e.duration).to.equal(3600);
	})
})