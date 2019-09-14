import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { Game } from "./Game";

export class Snake {
  head = new Cell(2, 0);
  tail = [new Cell(0, 0), new Cell(1, 0)]

  direction: Direction = 'Right'
  tailSize = 2
  controller = 0;

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

    switch (this.direction) {
      case "Right":
        const newHead1 = new Cell(this.head.x + 1, this.head.y);
        if (newTail.includes(newHead1, 0)) {
          this.controller++;
          this.restartGame()
          break;
        }
        else {
          this.head = newHead1;
          break;
        }
      case "Down":
          const newHead2 = new Cell(this.head.x, this.head.y + 1);
          if (newTail.includes(newHead2, 0)) {
            this.controller++;
            this.restartGame()
            break;
          }
          else {
            this.head = newHead2;
            break;
          }
      case "Up":
          const newHead3 = new Cell(this.head.x, this.head.y - 1);
          if (newTail.includes(newHead3, 0)) {
            this.controller++;
            this.restartGame()
            break;
          }
          else {
            this.head = newHead3;
            break;
          }
      case "Left":
        const newHead4 = new Cell(this.head.x - 1, this.head.y)
        if (newTail.includes(newHead4)) {
          this.controller++;
          this.restartGame();
          break;
        }
        else {
          this.head = newHead4;
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
    if (this.controller > 0) {
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