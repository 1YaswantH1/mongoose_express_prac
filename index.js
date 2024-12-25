const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Dummy');

let db = mongoose.model('Database', { username: String, password: String });
// major flaw in validation in mongoose it works fine while creating while upating it dosent hold schema defination it sets age to negative while min 0 so add runvalidater true to fix it 

// Model.findOneAndUpdate({name:"dummy"},{age:-100},{new:true}).then(res=>console.log(res))
// FIX
// Model.findOneAndUpdate({ name: "dummy" }, { age: -10 }, { new: true, runValidators: true }).then(res => console.log(res)).catch(err => console.error(err));

let schema = new mongoose.Schema({
    // long way we can add validation
    name: {
        type:String,
        required:true,
        maxlength:10,
        minlength:1

    },
    // shortway
    age: {type:Number,
        min:0
    },
    passed: {
        type:Boolean,
        default:true
    }
})
// let schema = new mongoose.Schema({
//     // long way we can add validation
//     name: {
//         type:String,
//     },
//     // shortway
//     age: Number,
//     passed: {
//         type:Boolean,
//     }
// })
let Model = new mongoose.model("Model", schema)



// insertion using mongoose

// let document = new Model({name:"YASH",age:12,passed:true}) 
// new Model({name:"YASH1",age:12,passed:true}).save() 

// inserting many using mongoose

// Model.insertMany([{ name: "YASH3", age: 12, passed: true }, { name: "YASH4", age: 12, passed: true }, { name: "YASH5", age: 12, passed: true }, { name: "YASH6", age: 12, passed: true }, { name: "YASH7", age: 12, passed: true }]) 

// Model.insertMany([{ name: "YASH305", age: 12, passed: true }])
// .then(()=>{
//     console.log("successful insertion")
// })

// finding data using maongoose
// Model.find({}).then(data=>{console.log(data)})
// Model.find({age:{$gte:100}} ).then(data=>{console.log(data)})

// Model.findById('676c5a08b35c2ad3734180e8').then(data=>console.log(data))


// updating in mongoose
// Model.updateOne({name:"YASH1"},{passed:false}).then(res=>console.log(res))
// fist arg is what to be selected then what to be updated

// Model.findOneAndUpdate({name:"YASH1"},{age:12000}).then(Response=>console.log(Response))

// ouputs :old one input data

// Model.findOneAndUpdate({name:"YASH1"},{age:12000}).then(Response=>console.log(Response),{new:true})

// outputs new data updated

// Delete the item 
// Model.deleteOne({name:"YASH3"}).then(res=>console.log(res))
// Model.deleteMany({name:"YASH1"}).then(res=>console.log(res))
