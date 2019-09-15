import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { Game } from "./Game";

export class Snake {
  head = new Cell(2, 0);
  tail = [new Cell(0, 0), new Cell(1, 0)]

  direction: Direction = 'Right'
  tailSize = 2
  errorCheck = 0

  setDirection(direction: Direction) {
    if (this.direction == "Left") {
      if (direction === "Right") {
        direction = this.direction;    // should ignore command "Right" and continue moving Left
      }
    }
    if (this.direction == "Right") {
      if (direction === "Left") {
        direction = this.direction;
      }
    }
    if (this.direction == "Up") {
      if (direction === "Down") {
        direction = this.direction;
      }
    }
    if (this.direction == "Down") {
      if (direction === "Up") {
        direction = this.direction;
      }
    }
    this.direction = direction
  }


  move() {
    this.tail.push(this.head);
    if (this.tailSize < this.tail.length) {
      this.tail.shift()
    }
    const newTail = this.tail;
    let newHead;


    switch (this.direction) {
      case "Right":
        newHead = new Cell(this.head.x + 1, this.head.y);
        if (newTail.includes(newHead, 0)) {
          this.errorCheck++;
          this.restartGame()
          break;
        }
        else {
          this.head = newHead;
          break;
        }
      case "Down":
          newHead = new Cell(this.head.x, this.head.y + 1);
          if (newTail.includes(newHead, 0)) {
            this.errorCheck++;
            this.restartGame()
            break;
          }
          else {
            this.head = newHead;
            break;
          }
      case "Up":
          newHead = new Cell(this.head.x, this.head.y - 1);
          if (newTail.includes(newHead, 0)) {
            this.errorCheck++;
            this.restartGame()
            break;
          }
          else {
            this.head = newHead;
            break;
          }
      case "Left":
        newHead = new Cell(this.head.x - 1, this.head.y)
        if (newTail.includes(newHead)) {
          this.errorCheck++;
          this.restartGame();
          break;
        }
        else {
          this.head = newHead;
          break;
        }
    }
  }

  grow() {
    this.tailSize += 3
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    if (this.errorCheck > 0) {
      return true;
    }
    return false;
  }

  getDirection(): Direction {
    return this.direction;
  }

  restartGame() {
    if (this.isSnake){
    this.head = new Cell(2, 0);
    this.tail = [new Cell(0, 0), new Cell(1, 0)]
  }
}

  getTail(): Cell[] {
    return this.tail;
  }
}