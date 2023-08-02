/*

Create a class of a real work object (animate or inanimate), the class needs to have the following:

    Characteristics

    Behaviors

    Custom constructor
      when you initialize the class the constructors will be called upon.


    Properties

    Getters
    Setters

    Computed getter

    Methods

    There will need to be at least three tests,
    more are encouraged. 

Please cover the following in at least one of your tests:

    Initializing the class

    Testing your computer property

    Testing a characteristic

*/
//properties

export class Boxes {
  private Height: number;
  private Width: number;
  private Length: number;
  private Thickness: number;
  private Color: string;
  //private boxDimensions: number;

  //constructor
  constructor(
    newHeight: number,
    newWidth: number,
    newLength: number,
    newThickness: number,
    newColor: string,

  ) {
    this.Color = newColor;
    this.Thickness = newThickness;
    this.Height = newHeight;
    this.Width = newWidth;
    this.Length = newLength;
    
  }

  // computed Get for dimension


//getter
getColor():String {
  return this.Color;
}

  //setter

  setcolor(Color: string) {
    this.Color = Color;
  }

  setheight(Height: number) {
    this.Height = Height;
  }

  setlength(Length: number) {
    this.Length = length
  }
}
  // method
  // public CalcBoxDimensions(
  //   height: number,
  //   width: number,
  //   length: number
  // ): number {
  //   return (this.boxDimensions = height * width * length);}




  public boxDurability(): boolean {
    if (this.boxThickness > 10 && this.boxDimensions < 50000) {
      return true;
    }
    return false;
  }


const newInstanceBoxes = new Boxes(15, 20, 20, 5, "black")
console.log(Boxes)