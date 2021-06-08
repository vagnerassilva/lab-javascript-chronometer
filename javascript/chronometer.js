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
    return Math.round(this.currentTime / 60)
    
    
    
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    //  if(value < 10) {
    //   this.getSeconds = ("0" + value).slice(-2)
    //   this.getMinutes = ("0" + value).slice(-2)
    // }
    // else {
    //   // value.toString()
    // //   // value.toString()
    // }
    // }
    
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
