// nested destructuring

const users = [
    {userId: 1, firstName: "Saeed", gender: "male"},
    {userId: 2, firstName: "Sophia", gender: "female"}
]

const [{userId:user1Id},{userId:user2Id} ,] = users;
console.log(user1Id, user2Id)
// console.log(firstName)