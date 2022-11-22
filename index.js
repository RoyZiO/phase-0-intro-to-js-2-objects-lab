// Write your solution in this file!
const employee = {
    name: "Roy Zio",
    streetAddress: "Ruiru"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "Zio", 777))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "Zio", 444)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj
}


console.log(deleteFromEmployeeByKey(employee, "jobIdentificationNumber"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}


destructivelyDeleteFromEmployeeByKey(employee, "IdentificationNumber")
console.log(employee);