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
    this.direction = direction
  }

  move() {
    this.tail.push(this.head)
    if (this.tailSize < this.tail.length) {
      this.tail.shift()
    }

    switch (this.direction) {
      case "Right":
        this.head = new Cell(this.head.x + 1, this.head.y)
        if (this.head === this.tail[0]) {
          this.head = new Cell(this.head.x - 2, this.head.y)     // WHY it doesn't work? 
        }
        break
      case "Down":
        this.head = new Cell(this.head.x, this.head.y + 1)
        /* 
        if (this.head === this.tail[0]) 
        {
            this.head = new Cell(this.head.x, this.head.y - 2)    
        } 
        */
        break
      case "Up":
        this.head = new Cell(this.head.x, this.head.y - 1)
        break
      case "Left":
        this.head = new Cell(this.head.x - 1, this.head.y)
        break
    }

  }

  grow() {
    this.tailSize += 3
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(): boolean {
      for (var i = 0; i < this.tail.length; i++) {
        if (this.head === this.tail[i] )
        {
          return true
        }}
    return false
  }


  getDirection(): Direction {
    return this.direction;
  }


  restartGame() {
    if (this.isSnake) {
      this.head = new Cell(2, 0);
      this.tail = [new Cell(0, 0), new Cell(1, 0)]
    }
  }

  getTail(): Cell[] {
    return this.tail;
  }
}