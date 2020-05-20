require("./db/mongoose");
const User = require("./db/models/user");

const createUser = async (data) =>
{
    try
    {
        const user = new User(data);
        await user.save();
        console.log(user);
    }
    catch(error)
    {
        console.log(error);
    }
}

const findUsers = async () =>
{
    try
    {
        const users = await User.find();
        console.log(users);
    }
    catch(error)
    {
        console.log(error);
    }
}

createUser({ name: "Sami", age: 16});

findUsers();
















// User.find({}).then((users) =>
// {
//     console.log(users);
// }).catch((err) =>
// {
//     console.log(err);
// });

// const user = User({ name: "Tom", age: 23 })
// user.save()..then((user) =>
// {
//     console.log(user);
// }).catch( (err) =>
// {
//     console.log(err);
// });
