class Correlation{
	constructor(){
		this.x=[];
		this.y=[];
		this.mulXY=0;
		this.sqX=0;
		this.sqY=0;
		this.n =0;
		this.sumX=0;
		this.sumY=0;
		this.totalSumx=0;
	}
	
	//caculate the value of mul	
	checkXLengthequalYLength(){
		return this.x.length=this.y.length;
	}
	setArray(inputData,SetArrayX){
		if (typeof inputData === "string"){
			let tempArray = inputData.split(",");
			if (SetArrayX){
				this.x = tempArray.map(Number);
			}else{
				this.y = tempArray.map(Number);
			}
		}else {
		      if (SetArrayX) {
		        this.x = inputData.map(Number);
		      } else {
		        this.y = inputData.map(Number);
		      }
		    }
		}
	caculateN(){
			this.n = this.x.length;
			return this.n;
			}

	sum(arrayOfNumbers){
		let sum = 0
		for (let i = 0; i<arrayOfNumbers.length; i++){
			sum+= arrayOfNumbers[i]
		}
		return sum
	}
	displaySum(){
	 this.sumX = this.sum(this.x)
	 this.sumY = this.sum(this.y)
	}
	/*plusX(){
		this.sumX=0;
		for(var i =0;i<this.x.length;i++){
			this.sumX += this.x[i]
			//console.log(this.x[i] );
		}
		//console.log('Andy SUm X: ' + this.sumX)
		return this.sumX;
	}*/
     multi(){
		this.mulXY = 0;
		//console.log(this.x)
		for(var i =0;i<this.x.length;i++){
			this.mulXY += this.x[i]*this.y[i];
			//console.log(this.x[i])	
			}
		return this.mulXY ;
	}
	//caculate the value of x*x
	squreX () {
		this.sqX = 0;
		for(var i =0;i<(this.x.length);i++){
		this.sqX += this.x[i]*this.x[i];	
		}
		return this.sqX ;
	}
	/*plusY(){
		this.sumY=0;
		for(var i =0;i<this.x.length;i++){
			this.sumY +=this.y[i];
		}
		return this.sumY;
	}*/
	squreY () {
		this.sqY = 0;
		for(var i =0;i<this.x.length;i++){
		
		this.sqY += this.y[i]*this.y[i];	
		
		}
		
		return this.sqY ;

	}

	mulFunction(){
		this.displaySum();
		let upperValueC17=this.caculateN() * this.multi ()
		let ValueC18 = (this.caculateN()*this.squreX ())-(this.sumX * this.sumX);
		let upperValueE17 = this.sumX*this.sumY;
		let valueE18 = (this.caculateN()*this.squreY ())-(this.sumY * this.sumY);
		let valueD20= (upperValueC17-upperValueE17);
		let valueD21=(ValueC18*valueE18);
		let valueD24 = Math.sqrt(valueD21);
		let valueD26= valueD20/valueD24;
		return "Correlation is " + valueD26;

	}

}
	class Regression extends Correlation{
		constructor (){
			super();
			this.avgX=0;
			this.avgY=0;	
			this.beta0=0;
			this.beta1=0;
		}	
			calAvgX(){
			this.displaySum()
			this.avgX = this.sumX  / this.caculateN();
			console.log(this.avgX)
			return this.avgX 
			}
			calAvgY(){
			this.avgY = this.sumY / this.caculateN();
			return this.avgY
			}
			calBeta1(){
			//this.multi();
			//this.squreX();
			//console.log('test.....' + this.multi())
			//console.log('test2....' + this.caculateN())
			this.beta1 = (this.multi()-this.caculateN()*this.calAvgX()*this.calAvgY())/(this.squreX()-this.caculateN()*this.calAvgX()*this.calAvgX())
			return this.beta1;
			}
			calbeta0(){
			this.beta0=this.calAvgY()-this.calBeta1()*this.calAvgX();
			return this.beta0;
			}
			
			mulFunction(){
				//console.log(this.calBeta1())
				return 'the formula is '+ 'y='+ this.calBeta1()+"x"+this.calbeta0()

			}




}







	
	
	
	
	
	
	
