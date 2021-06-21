export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  kind(): string { // dupa : este return type-ul
    if(this.sides.length < 3 || this.sides[0] <= 0 || this.sides[1] <= 0 || this.sides[2] <= 0){
      throw new Error("Not enough size");
    }
    if(this.sides[0] <= this.sides[1] && this.sides[1] <= this.sides[2]){
      if(this.sides[0] + this.sides[1] < this.sides[2]){
        throw new Error("Not a triangle");
      }
    }
    if(this.sides[2] <= this.sides[1] && this.sides[1] <= this.sides[0]){
      if(this.sides[2] + this.sides[1] < this.sides[0]){
        throw new Error("Not a triangle");
      }
    }
    if(this.sides[1] <= this.sides[2] && this.sides[2] <= this.sides[0]){
      if(this.sides[1] + this.sides[2] < this.sides[0]){
        throw new Error("Not a triangle");
      }
    }
    if(this.sides[0] == this.sides[1]){
      if(this.sides[1] == this.sides[2]){
        return 'equilateral';
      }else{
        return 'isosceles';
      }
    }else if(this.sides[1] == this.sides[2]){
      return 'isosceles';
    }else if(this.sides[0] == this.sides[2]){
      return 'isosceles';
    }
    return 'scalene';
  }
}
