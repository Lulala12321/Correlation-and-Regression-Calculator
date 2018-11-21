describe('Test Correlation ',function(){
	var MyCorrelation = new Correlation()
	beforeEach(function(){
		MyCorrelation.setArray([83,116,186,81,114],true)
		MyCorrelation.setArray([11.2,9.3,21.6,6.9,10.2],false)
		
	})
	it ('X-Array should contain the test data', function(){
		expect(MyCorrelation.y).toEqual([11.2,9.3,21.6,6.9,10.2])
	})
	it ('Y-Array should contain the test data', function(){
		expect(MyCorrelation.x).toEqual([83,116,186,81,114])
	})
	it('Computed Number of Data',function(){
		MyCorrelation.caculateN()
		expect(MyCorrelation.n).toEqual(5)
	})
	it('Computed Number for sum of X', function(){
		MyCorrelation.displaySum()
		expect(MyCorrelation.sumX).toEqual(580)
	})
	it ('Computed Number for sum of Y',function(){
		MyCorrelation.displaySum()
		expect(MyCorrelation.sumY).toEqual(59.2)
	})

	it ('Computed Number for Sum of X*Y',function(){
		MyCorrelation.multi()
		expect(MyCorrelation.mulXY).toEqual(7747.7)

	})
	it ('Computed Number for Sum of X Squared',function(){
		MyCorrelation.squreX ()
		expect(MyCorrelation.sqX).toEqual(74498)
	})
	it ('Computed Number for Sum of Y Squared',function(){
		MyCorrelation.squreY ()
		expect(MyCorrelation.sqY).toEqual(830.14)
	})
	it('Compute Correlation', function () {
		let tempString = MyCorrelation.mulFunction()
		expect(tempString.replace('Correlation is ', '')).toBeCloseTo(0.9117368266588938)
	})
	
	






})