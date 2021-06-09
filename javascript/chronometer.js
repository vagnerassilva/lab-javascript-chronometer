class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
     this.intervalId = setInterval(() => {
      this.currentTime++;
       if (callback) {
         callback();
       } 
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
    
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0') 
    //padStart coloca o segundo argumento no começo caso não tenha o 
    //número de casas estabelecido no primeiro argumento
    
    //outra opção
    //if(value < 10) {
      //return "0" + value.toString()
    //}
    //else {
      //return value.toString()
    //}
  }
    

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // "mm:ss"
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
