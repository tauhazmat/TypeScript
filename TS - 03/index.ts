// Tuples 
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];


// Enums
// enum OrderStatus {
//     PENDING,
//     CONFIRMED,
//     SHIPPED,
//     DELIVERED
// }

// console.log(OrderStatus.CONFIRMED);



enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);