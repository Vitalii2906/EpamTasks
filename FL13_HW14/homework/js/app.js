function Student(name, email){
   let homeworkResult = []
   this.getName = function(){
      this.name = name
      return name
   }
   this.getEmail = function(){
      this.email = email
      return email
      
   }
   this.addHomeworkResult = function(topic, success){
      this.topic = topic
      homeworkResult.push(topic)
      this.success = success
      homeworkResult.push(success)
      return homeworkResult
   }
}