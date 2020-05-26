function Vehicle(color, engine) {
   this.color = color
   this.engine = engine
	this.isDriving = false
	this.isStopping = false
	this.isStopped = true
	this.lastMaxSpeed = 0
	this.currSpeed = 0
   this.interval
   this.name = 'Vehicle'
   this.maxSpeed = 70
   this.model = 'unknown model'

	this.getInfo = function() {
		return{
         'engine': this.engine,
         'color': this.color,
         'maxSpeed': this.maxSpeed,
         'model': this.model
      }
	},

	this.upgradeEngine = function(newEngine, maxSpeed) {
		if(this.isStopped) {
			this.engine = newEngine
			this.maxSpeed = maxSpeed
		}else{
			console.log('You can\'t upgrade engine while car is moving!')
		}
	},

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
			}, 2000)
		}
	},

	this.stop = function() {
      this.stopMessage = `${this.name} is stopped. Maximum speed during the drive was ${
         this.currSpeed}`
      this.lastMaxSpeed = this.currSpeed
		this.isStopping = true
		this.isDriving = false
		clearInterval(this.interval)
		this.interval = setInterval( () => {
			this.lastMaxSpeed -= 20
			console.log(this.lastMaxSpeed)
			if(this.lastMaxSpeed <= 0) {
				clearInterval(this.interval)
				this.lastMaxSpeed = 0
				this.isStopping = false
				this.isStopped = true
				console.log(this.stopMessage)
			}
		}, 1500)
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
}
Car.prototype = new Vehicle()


function Motorcycle(model, color, engine){
   Car.call(this) 
   this.color = color
   this.engine = engine
   this.model = model
   this.maxSpeed = 90
   this.name = 'Motorcycle'
}
Motorcycle.prototype = new Car()
