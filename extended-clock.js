class ExtendedClock extends Clock {
  constructor({template, precision = 1000}) {
    super({template});
    this.precision = precision;
  }
  start() {
    super.render();
    super.timer = setInterval(() => super.render(), this.precision);
  }
}
let exClock = new ExtendedClock({template: 'h:m:s', precision: 5000});
exClock.start();

