var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
  const applesPerBox = 4;
   const boxesPerPackage = 2;
   const friends = 2; 
  
  // calculamos el numero total de cajas y  paquetes
  const totalBoxes = Math.ceil(input.length / applesPerBox);
  const packagesPerFriend = Math.ceil(totalBoxes / (boxesPerPackage * friends));

  const output = {};

  for (let friend = 0; friend < friends; friend++) {
    output[friend] = []; 

    for (let package = 0; package < packagesPerFriend; package++) {
      output[friend][package] = []; 

      for (let box = 0; box < boxesPerPackage; box++) {
        const startIndex = applesPerBox * (package * boxesPerPackage + friend * packagesPerFriend * boxesPerPackage + box);
        const endIndex = Math.min(startIndex + applesPerBox, input.length); 

        output[friend][package].push(input.slice(startIndex, endIndex));
      }
    }
  }

  return output;

}

console.log(apples(input))
