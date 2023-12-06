export const CONSTANTS = new class {
  readonly MaxX = 32;
  readonly MaxY = 18;

  readonly BlockWidth = 100 / this.MaxX;
  readonly BlockHeight = 100 / this.MaxY;
}();