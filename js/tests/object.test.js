(function(expect, describe, it, window) {

	"use strict";

	describe("app", function() {

		it("should exist", function() {

			expect(window.APP).to.exist;

		});


		describe("greet()", function() {

			var app = window.APP;

			it("should return hello <name> for the name passed", function() {

				var cases = [{
					input: "Milly",
					expected: "hello millie"
				}, {
					input: "Sharon",
					expected: "hello sharon"
				}, {
					input: "You",
					expected: "hello you"
				}, {
					input: "hi",
					expected: "hi"
				}];

				cases.forEach(function(testCase) {

					var result = app.greet(testCase.input);
					expect(result).to.equal(testCase.expected);

				});

			});

		});

	});

});
