//What is an events and eventEmitter?

const EventEmitter=require('events')

const event=new EventEmitter()   //ye hamne ek object bna diya

//event generate hone k bad hame use handle v karna hoga, uske liye hum use krte hai event.on()
event.on('sayName',()=>{      //iske andar do chije hongi,first one is :- event name, second is:- callback function
    console.log("Hello Kamdev ! event called");
}) 


event.emit('sayName') //it will generate events

