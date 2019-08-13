let rover = {direction: `N`, x:0, y:0}

function turnLeft(rover){
 switch (rover.direction) {
   case 'N':
     rover.direction = 'W';
     break;
   case 'S':
     rover.direction = 'E';
     break;
   case 'E':
     rover.direction = 'N';
     break;
   case 'W':
     rover.direction = 'S';
     break;
  }
  console.log("turnLeft was called! " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
  case 'N':
    rover.direction = 'E';
    break;
  case 'S':
    rover.direction = 'W';
    break;
  case 'E':
    rover.direction = 'S';
    break;
  case 'W':
    rover.direction = 'N';
    break;
  }
  console.log("turnRight was called! " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
  case 'N':
    rover.y = rover.y - 1;
    break;
  case 'S':
    rover.y = rover.y + 1;
    break;
  case 'E':
    rover.x = rover.x + 1;
    break;
  case 'W':
    rover.x = rover.x - 1;
    break;
  }
  console.log("moveForward was called, new postion: " + rover.x, rover.y)
}

function moveCommand(command){
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
    case `f`:
      moveForward(rover);
        break;
    case `r`:
      turnRight(rover);
     
    break;
    case `l`:
      turnLeft(rover);
     
    break;
  }
  }
}

moveCommand(`rffrfflfrff`);