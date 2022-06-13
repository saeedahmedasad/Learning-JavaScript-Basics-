// Object Inside Array 

const users = [
    {userId: 1, firstName: "Saeed"},
    {userId: 2, firstName: "Ali"},
]

// console.log(users[0]);

for (let user of users) {
    console.log(user.userId)
}