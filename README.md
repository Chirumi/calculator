# calculator
Problem:
Need to figure out how to store numbers that are input into the calculator and also store the operator. Used empty arrays to store numbers and another empty array to store the oprators. Made a function operation(arr) {} to dump the stored values and the operators, used for loop and arr.reduce to apply operator to the array of values using template literals ${}
Redone the code: store numbers or operators clicked into a single array. Made a function joined(array) to turn the array into a string and pushed to operateValue array. Then items in operateValue acts as parameter to operate() function which does the calculation based on parameters. operateValue[0] would be first number, operateValue[1] would be operator and operateValue[2] would be the second number
