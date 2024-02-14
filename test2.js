var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    function sortInBoxes(apples, applesPerBox) {
        const boxes = [];
        let i = 0;
        
        while (i < apples) {
          const box = [];
          for (let j = 0; j < applesPerBox && i < apples; j++) {
            box.push(i + 1);
            i++;
          }
          boxes.push(box);
        }
        
        return boxes;
    }

  function sortInPackages(boxes, boxesPerPackage) {
    const packages = [];
    
    for (let i = 0; i < boxes.length; i += boxesPerPackage * 2) {
      const package = [];
      for (let j = i; j < i + boxesPerPackage * 2 && j < boxes.length; j += 2) {
        package.push([boxes[j], boxes[j + 1]]);
      }
      packages.push(package);
    }
    
    return packages;
  }

  function sortApples(apples) {
  
  }

  return sortApples(input);
}

console.log(apples(input))
