"use strict";
// Tuples 
let ourTuple;
ourTuple = [5, false, 'Coding God was here'];
// Enums
// enum OrderStatus {
//     PENDING,
//     CONFIRMED,
//     SHIPPED,
//     DELIVERED
// }
// console.log(OrderStatus.CONFIRMED);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
