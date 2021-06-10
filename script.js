// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// Поиск профиля
function lookUpProfile(name, prop) {

    let result            = "";

    for (let key in contacts) {

        let obj           = contacts[key];
        let isFirstName   = obj.firstName == name;
        let isOwnProperty = obj.hasOwnProperty(prop);

        if (isFirstName) {
            result = isOwnProperty ? obj[prop] : "No such property";
            break;
        } else {
            result        = "No such contact";
        }
    }
    return result;
}

let result                = lookUpProfile("Akira", "address");
console.log(result);
result                    = lookUpProfile("Kristian", "lastName");
console.log(result);
