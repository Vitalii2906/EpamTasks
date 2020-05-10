let minus = -1, two = 2, three = 3, four = 4, five = 5, twentyFive = 25, fifty = 50, seventyFive = 75, hundred = 100
const fighter1 = new Fighter({name:'Maximus', damage: 20, strength: 20, agility: 15, hp: 100})
const fighter2 = new Fighter({name:'Commodus', damage: 25, strength: 25, agility: 20, hp: 90})
function Fighter({name, damage, strength, agility, hp, wins, losses}){
   wins = 0
   losses = 0
   const maxHP = hp
   return {
      getName: function(){
         return name
      },
      getDamage: function(){
         return damage
      },
      getStrength: function(){
         return strength
      },
      getAgility: function(){
         return agility
      },
      getHealth: function(){
         return hp
      },
      attack: function(){
         let diff = strength - agility
         let difference = Math.abs(diff)
         if(difference < 0){
            difference = difference * minus
         }
         let chance
         let attack
         if(difference > 0){
            chance = difference * five
         }else {
            return true
         }
         if(chance === fifty){
            attack = Math.floor(Math.random() * two)
            if(attack === 0){
               return true
            }else{
               return false
            }
         }else if(chance === twentyFive){
            attack = Math.floor(Math.random() * three)
            if(attack === 1 || attack === two || attack === 0){
               return true
            }else{
               return false
            }
         }else if(chance === seventyFive){
            attack = Math.floor(Math.random() * four)
            if(attack === 0){
               return true
            }else{
               return false
            }
         }else if(chance >= hundred){
            return false
         }
      },
      logCombatHistory: function(){
         console.log(`Name: ${name}, Wins:${Number(wins)}, Losses:${Number(losses)}`)
      },
      heal: function (num){
         hp = hp + num
         if(hp > maxHP){
            hp = maxHP
         }
         return hp
      },
      dealDamage: function (arg){
         hp = hp - arg
         if(hp < 0){
            hp = 0
         }
         return hp
      },
      addWin: function (){
         return wins++
      },
      addLose: function (){
         return losses++
      }
   }
} 
function battle(object1, object2){
   let name1 = object1.getName()
   let name2 = object2.getName()
   let attack1 = object1.attack(object2)
   let attack2 = object2.attack(object1)
   let hp1 = object1.getHealth()
   let hp2 = object2.getHealth()
   let damage1 = object1.getDamage()
   let damage2 = object2.getDamage()
   let deal1 
   let deal2
   if(hp1 <= 0){
      return(
         console.log(`${name1} is dead and can't fight.`)
      )
   }else if(hp2 <= 0){
      return(
         console.log(`${name2} is dead and can't fight.`)
      )
   }
   if(hp1 > 0 && hp2 > 0){
      while(hp2 > 0 && hp1 > 0){
         attack1
         if(attack1 === true){
            hp2 = hp2 - damage1
            deal2 = object2.dealDamage(damage1)  
            console.log(`${name1} makes ${damage1} damage to ${name2}`)
         }else if(attack1 === false){
            console.log(`${name1} attack missed`)
         }
         attack2
         if(attack2 === true){
            hp1 = hp1 - damage2
            deal1 = object1.dealDamage(damage2)
            console.log(`${name2} makes ${damage2} damage to ${name1}`)
         }else if(attack2 === false){
            console.log(`${name2} attack missed`)
         }
      }
   }
   if(hp1 <= 0){
      object2.addWin()
      object1.addLose()
      console.log(`${name2} has won!`)
   }else if(hp2 <= 0){
      object1.addLose()
      object2.addWin()
      console.log(`${name1} has won!`)
   }
}



