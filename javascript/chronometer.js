class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    
    
    
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return "0" + value.toString()
    }
    else {
      return value.toString()
    }
  }
    //  if(value < 10) {
    //   this.getSeconds = ("0" + value).slice(-2)
    //   this.getMinutes = ("0" + value).slice(-2)
    // }
    // else {
    //   // value.toString()
    // //   // value.toString()
    // }
    // }
    

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${splitMinutes}:${splitSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
