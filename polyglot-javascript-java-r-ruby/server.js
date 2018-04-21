const rubyadd = Interop.eval("ruby",
 `
	def rubyadd(a,b)
		a + b
	end
	method(:rubyadd)
`);

function jssum(v) {
	var sum = 0;
	for (var i = 0; i < v.length; i++) {
		sum = rubyadd(sum, v[i]);
	}
	return sum;
}

const applyToRandomDoubles = Interop.eval("R", "function(f) { f(runif(1e8))}")

const BigDecimal = Java.type('java.math.BigDecimal')

// SERVER
const express = require('express')();

express.get('/', (req, res) => {
	console.log("HIT!");

    var start = Date.now();
	const sum = applyToRandomDoubles(jssum);
    const bigNumber = BigDecimal.valueOf(sum).pow(100);
    var time = Date.now() - start;

	var response = "<h1>POLYGLOT DEMO!</h1>";
    response += "<h2>I generated 100 000 000 random double values!</h2>";
    response += "<p>Using the convinient <a href='https://www.rdocumentation.org/packages/compositions/versions/1.40-1/topics/runif'>runif</a> function from R.</p>";

    response += "<h2>I sumed up those values!</h2>";
    response += "<p>Iterated over them in JavaScript and did the addition in Ruby. The sum was: " + sum + "</p>";

    response += "<h1>I raised the result to the power of 100!</h1>";
    response += "<p>With no loss in precision because I used Java's BigDecimal class. The result was: " + bigNumber.toString() + "</p>";

    response += "<h2>This was done FAST because I ran on GraalVM!</h2>";
    response += "<p>I did this in " + time + "ms. </p>";

    response += "<h2> Find out more on <a href='http://www.graalvm.org'>www.graalvm.org<\a></h2>"

    response += "<h2> See my source code <a href='https://github.com/boris-spas/graalvm-demos/blob/extended/polyglot-javascript-java-r-ruby/server.js'>here<\a></h2>"


	res.send(response);
});
express.listen(3000, () => {
	console.log('Server up on port 3000');
});
