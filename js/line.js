class Line {
    constructor(slope, intercept) {
        // expects slope and intercept as numbers
        // if it doesn't get them, it gets cranky
        this.setIntercept(intercept)
        this.setSlope(slope)
        this.slope = slope
        this.intercept = intercept
    }

    // methods
    getY(x) {
        return (this.slope * x) + this.intercept
    }

    getX(y) {
        return (y - this.intercept) / this.slope
    }

    setIntercept(intercept) {
        if (typeof intercept !== 'number') {
            throw new Error('Please provide a valid number for the y-intercept of this Line')
        }
        this.intercept = intercept
    }

    getIntercept() {
        return this.intercept
    }

    setSlope(slope) {
        if (typeof slope !== 'number') {
            throw new Error('Please provide a valid number for the slope of this Line')
        }
        this.slope = slope
    }

    getSlope() {
        return this.slope
    }
}