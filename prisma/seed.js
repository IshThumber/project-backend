// const prisma = require("./prismaClient")

// const datas = [
//   {
//     name: "Ish",
//     phoneNumber: "1234567890",
//     email: "ish@gmail.com",
//     hobbies: "skdjfbsjkd",
//   }, {
//     name: "Ish1",
//     phoneNumber: "1234567890",
//     email: "ish1@gmail.com",
//     hobbies: "skdsfdjfbsjkd",
//   }
// ]


// async function seed() {
//   try {
//     prisma.$connect;

//     for (let i = 0; i < data.length; i++) {
//       await prisma.data.create(datas[i].name, datas[i].phoneNumber, datas[i].email, datas[i].hobbies)
//     }

//     prisma.$disconnect
//   } catch (err) {
//     console.log(err)
//   }
// }

// module.exports = { seed }