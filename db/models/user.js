const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
        name: {
        type: String,
        required: true,
        validate(value)
        {
            if(value === "Steve")
            {
                throw new Error("To moje imie");
            }
        },

        unique: true,
        lowercase: true
    },
    age: {
        type: Number,
        default: 18,
        min: 18
    }
});

userSchema.pre("save", function(next)
{
    //co ma sie wydazyc przed zapisem usera
    //this to user
    this.name += "jestem najlepszczy"
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;









// const User = mongoose.model("User", {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });
