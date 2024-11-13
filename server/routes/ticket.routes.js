// const { Router } = require("express")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// require("dotenv").config()
// const cors = require("cors")

// const { TicketModel, BookmarkModel, QuestionModel,JobModel } = require("../models/ticket.model")
// const { UserModel } = require("../models/User.model")

// const ticketController = Router();

// ticketController.use(cors())
// // {
// //     "params": {
// //         "genre": [
// //             "Backend Developer"
// //         ],
// //         "_sort": null,
// //         "_order": null
// //     }
// // }

// ticketController.get("/", async (req, res) => {
//     console.log(req.query);
//     let params = req.query;
//     const genre = params.genre[0];
//     const sort = params._sort ==  "asc" ? 1 : -1;
//     const query = params._q;
//     console.log(genre,sort,query)

    
    
//      const data = await JobModel.find({ language: new RegExp(query, "i") }).sort({"postedAt": `${sort}`})
//      const filteredUsers = data.filter(user => {
//         return user.role == genre
//       });
//       res.send(filteredUsers);
   
// })

// // ticketController.get("/bookmark", async (req, res) => {

// //     const book = await BookmarkModel.find({ userId: req.body.userId, })
// //     console.log(book);
// //     res.send(book)
// // })



// ticketController.post("/create", async (req, res) => {
//     console.log(req.body);
//     const newJob = new JobModel(req.body)
//     // console.log(newTicket)
//     try {
       
//         await newJob.save()
       

//         res.send("New Job created")
//     }
//     catch (err) {
//         res.send("something went wrong")
//     }
// })


// // ticketController.post("/bookmark", async (req, res) => {

// //     const book = new BookmarkModel(req.body)
// //     console.log(book)
// //     try {
// //         await book.save()
// //         res.send("Bookmarked created")
// //     }
// //     catch (err) {
// //         res.send("something went wrong")
// //     }
// // })






// module.exports = {
//     ticketController
// }