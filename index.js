//This is an exercise on functions to make Karel the robot perform a chess pattern
//Code must be copied and pasted into https://stanford.edu/~cpiech/karel/ide.html
//Click the play button to run the code.

function main() {
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
}

function goUpTurnRight() {
  turnRight();
  move();
  turnRight();
}

function goUpTurnLeft() {
  turnLeft();
  move();
  turnLeft();
}

function beepersRight() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function beepersLeft() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}
