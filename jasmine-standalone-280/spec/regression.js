describe('Test Rerrelation' ,function(){
	var myRegression = new Regression()
	beforeEach(function(){
		myRegression.setArray([130,650,99,150,128,302,95,945,368,961], true)
	   myRegression.setArray([186,699,132,272,291,331,199,1890,788,1601], false)
})
	it ('X-Array should contain the test data', function(){
		expect(myRegression.x).toEqual([130,650,99,150,128,302,95,945,368,961])
	})
	it ('Y-Array should contain the test data', function(){
		expect(myRegression.y).toEqual([186,699,132,272,291,331,199,1890,788,1601])
	})
	it ('average X should be right', function(){
		myRegression.calAvgX()
		expect(myRegression.avgX).toEqual(382.8)
	})


})