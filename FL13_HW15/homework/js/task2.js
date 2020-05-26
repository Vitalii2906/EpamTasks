let twoThousand = 2000, oneThousandAndFiveHundred = 1500, thirty = 30


function Vehicle(color, engine) {
   this.color = color
   this.engine = engine
	this.isDriving = false
	this.isStopping = false
	this.isStopped = true
   this.interval
   this.name = 'Vehicle'
   this.maxSpeed = 70
   this.model = 'unknown model'
   this.currSpeed = 0

	this.getInfo = function() {
		return{
         'engine': this.engine,
         'color': this.color,
         'maxSpeed': this.maxSpeed,
         'model': this.model
      }
	}

	this.upgradeEngine = function(newEngine, maxSpeed) {
		if(this.isStopped) {
			this.engine = newEngine
			this.maxSpeed = maxSpeed
		}else{
			console.log('You can\'t upgrade engine while car is moving!')
		}
	}

	this.drive = function() {
		if(this.isDriving) {
			console.log('Already driving')
		}else{
			this.isStopped = false
			this.isStopping = false
			this.isDriving = true
			this.interval = setInterval(() => {
            this.currSpeed += 20
				console.log(this.currSpeed)
				if(this.currSpeed >= this.maxSpeed && !this.isStopping) {
					console.log('speed is too high, SLOW DOWN!')
				}
         }, twoThousand)
		}
	}

	this.stop = function() {
      this.lastMaxSpeed = this.currSpeed
      this.stopMessage = `${this.name} is stopped. Maximum speed during the drive was ${
         this.lastMaxSpeed}`
		this.isStopping = true
		this.isDriving = false
		clearInterval(this.interval)
		this.interval = setInterval( () => {
			this.currSpeed -= 20
			console.log(this.currSpeed)
			if(this.currSpeed <= 0) {
				clearInterval(this.interval)
				this.currSpeed = 0
				this.isStopping = false
				this.isStopped = true
				console.log(this.stopMessage)
			}
		}, oneThousandAndFiveHundred)
   }
}

function Car(model, color, engine){
   Vehicle.call(this) 
   this.color = color
   this.engine = engine
   this.model = model
   this.maxSpeed = 80
   this.name = 'Car'
   this.changeColor = function(newColor){
      if(newColor !== this.color){
         this.color = newColor
         return this.color
      }else{
         console.log('The car is now this color')
      }
   }
   this.stop = function() {
      this.lastMaxSpeed = this.currSpeed
      this.stopMessage = `${this.name} ${this.model} is stopped. Maximum speed during the drive ${
         this.lastMaxSpeed}`
		this.isStopping = true
		this.isDriving = false
		clearInterval(this.interval)
		this.interval = setInterval( () => {
			this.currSpeed -= 20
			console.log(this.currSpeed)
			if(this.currSpeed <= 0) {
				clearInterval(this.interval)
				this.currSpeed = 0
				this.isStopping = false
				this.isStopped = true
				console.log(this.stopMessage)
			}
		}, oneThousandAndFiveHundred)
   }
}
Car.prototype = new Vehicle()


function Motorcycle(model, color, engine){
   Car.call(this) 
   this.color = color
   this.engine = engine
   this.model = model
   this.maxSpeed = 90
   this.name = 'Motorcycle'
   this.stop = function() {
      this.lastMaxSpeed = this.currSpeed
      this.stopMessage = `${this.name} ${this.model} is stopped. Good drive`
		this.isStopping = true
		this.isDriving = false
		clearInterval(this.interval)
		this.interval = setInterval( () => {
			this.currSpeed -= 20
			console.log(this.currSpeed)
			if(this.currSpeed <= 0) {
				clearInterval(this.interval)
				this.currSpeed = 0
				this.isStopping = false
				this.isStopped = true
				console.log(this.stopMessage)
			}
		}, oneThousandAndFiveHundred)
	}
	this.drive = function() {
		if(this.isDriving) {
			console.log('Already driving')
		}else{
			console.log('Let’s drive')
			this.isStopped = false
			this.isStopping = false
			this.isDriving = true
			this.interval = setInterval(() => {
            this.currSpeed += 20
				console.log(this.currSpeed)
				if(this.currSpeed >= this.maxSpeed && !this.isStopping) {
					console.log('speed is too high, SLOW DOWN!')
					if(this.currSpeed >= this.maxSpeed + thirty){
						console.log('Engine overheating')
						this.stop()
					}
				}
         }, twoThousand)
		}
	}
}
Motorcycle.prototype = new Car()
