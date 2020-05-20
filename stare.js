const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const ObjectId = mongo.ObjectID;

var url = 'mongodb://localhost:27017';

const dbname = "mongo-test";

mongoClient.connect(url, {}, (error, client) =>
{
    if(error)
    {
        console.log("Nie można połączyć się z bazą!!!!!!!!!!!!!");
    }

    const db = client.db(dbname);

    //użytkownicy
    db.collection("users").insertOne({
        name: "cvbcvb",
        age: 255
    }, (error, result) =>
    {
        if(error)
        {
            console.log("Błąd dodawania użytkownika!!!!!!!!!!!!!!!");
        }

        console.log(result.ops);
    });

    // db.collection("users").insertMany([
    //     {
    //         name: "Aaa",
    //         lastName: "bbbb"
    //     },
    //     {},
    //     {}
    // ], (error, result) =>
    // {
    //     if(error)
    //     {
    //         console.log("Adding users error");
    //     }

    //     console.log(result.ops);
    // });

    db.collection("users").find({
        _id: new ObjectId("5ec40357dc30ae16eca3d862")
        // age: { $gt: 20 } powyzej 20
    }).toArray( (error, users) =>
    {
        console.log(users);
    });

    db.collection("users").updateOne({
        age: 30
    }, {
        $set: {
            age: 35
        }
    });

    // const id = new ObjectId();
    // console.log(id);




    console.log("Połączomo z bazą <--------------");
});

// mongodb+srv://Czuczen:@NJ*xC7re3dpMt9@cluster0-aely2.mongodb.net/test?retryWrites=true&w=majority


