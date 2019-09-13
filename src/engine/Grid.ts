import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  apples = [
    new Cell(33, 22),
    new Cell(35, 22),
    new Cell(37, 22),
    new Cell(39, 22),
    new Cell(41, 22)]

    eatenAppleCount = 0;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void { }

  isAppleInside(cell: Cell): boolean {
    return this.apples.find(apple => apple.x === cell.x && apple.y === cell.y) !== undefined
  }

  removeApple(cell: Cell): void {
    const apple = this.apples.find(apple => apple.x === cell.x && apple.y === cell.y)
    for (var i = 0; i < this.apples.length; i++) {
      if (this.apples[i] === apple) {
        this.apples.splice(i, 1);
        this.eatenAppleCount ++;
      }
    }

  }

  addApples(): void {
    var a = Math.floor(Math.random() * 80);
    var b = Math.floor(Math.random() * 40);
    this.apples.push(new Cell(a, b));
  }

  isDone(): boolean {
if (this.eatenAppleCount >= 20) 
{
  return true;
}

    return false;
  }

  getApples(): Cell[] {
    return this.apples
  }
}
