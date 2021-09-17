class Painter {
    // instance variables: canvas, ctx, width, height
    scale = 20
    line

    constructor(canvas) {
        // this Painter expects a canvas context,
        // if it doesn't get one, it is cranky
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error("Painter must be initalized with a CanvasRenderingContext2d object,")
        }
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.setSize()
        this.setResizeListener()
        this.paintGrid()
    }

    // initizalization

    setResizeListener() {
        // whenever the window changes size, assume the canvas container has changed size, too
        window.addEventListener('resize', () => {
            this.setSize()
            this.paintGrid()
            this.paintLine(this.line)
        })
    }

    setSize() {
        // get the height and width of the parent
        let width = Number(this.canvas.parentElement.offsetWidth)
        let height = Number(this.canvas.parentElement.offsetHeight)
        // set the canvas to the height/width of its container
        this.canvas.width = width
        this.canvas.height = height

        // TODO: repaint grid?
    }

    // drawing

    paintLine(line) { // (This is where the magic happens!!!)
        // expects an instance of the Line class
        if (!(line instanceof Line)) {
            throw new Error('paintLine expects to receive an instance of the class Line')
        }

        // save the line for future use 
        this.line = line

        // clear canvas

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.paintGrid()

        // continue on

        console.log('Painitng line')

        for (let i = 0; (i*this.scale) < this.canvas.width; i += 1) {
            let grid_x_start = this.getGridX(i)
            let grid_y_start = this.getGridY(line.getY(i))

            let grid_x_end = this.getGridX(i+1)
            let grid_y_end = this.getGridY(line.getY(i + 1))
            // console.log("start", grid_x_start, grid_y_start)
            // console.log("end", grid_x_end, grid_y_end)
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)'
            this.ctx.beginPath()
            this.ctx.moveTo(grid_x_start,grid_y_start)
            this.ctx.lineTo(grid_x_end, grid_y_end)
            this.ctx.stroke()
        }

        // this.ctx.beginPath()
        // this.ctx.moveTo(0,this.getGridY(line.getIntercept()))
        // this.ctx.lineTo((this.canvas.width - 2), this.getGridY(line.getY(this.canvas.width - 2)))
        // this.ctx.stroke()

        // if (line.getSlope() <= (2/3)) {
        //     // the end point will be on the far side
            
        // } else {
        //     // the endpoint will be on the ceiling
        //     this.ctx.beginPath()
        //     this.ctx.moveTo(0,this.getGridY(line.getIntercept()))
        //     this.ctx.lineTo(this.getGridY(line.getX(this.canvas.height - 1)), (this.canvas.height - 2))
        //     this.ctx.stroke()
        // }

        // this.ctx.beginPath()
        // this.ctx.moveTo(0,this.canvas.height)
        // this.ctx.lineTo(this.canvas.width, 0)
        // this.ctx.stroke()
    }

    paintGrid() {
        // x lines
        console.log('Printing x lines')
        let lim = this.canvas.height
        for (let i = 0; i <(lim / this.scale); i += 1) {
            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = 'rgba(100, 100, 150, 0.5)'
            this.ctx.beginPath()
            let start_x = this.getGridX(0)
            let start_y = this.getGridY(i)
            let end_x = this.getGridX((this.canvas.width / this.scale))
            // debugger
            let end_y = this.getGridY(i)
            this.ctx.moveTo(start_x, start_y)
            this.ctx.lineTo(end_x, end_y)
            // this.ctx.moveTo(0,i)
            // this.ctx.lineTo((this.canvas.width - 2), i)
            this.ctx.stroke()
        }


        // y lines
        lim = this.canvas.width
        for (let i = 0; i <lim; i += this.scale) {
            this.ctx.strokeStyle = 'rgba(100, 100, 150, 0.5)'
            this.ctx.beginPath()
            this.ctx.moveTo(i, 0)
            this.ctx.lineTo(i, (this.canvas.height - 2))
            this.ctx.stroke()
        }
    }

    getGridX(x) {
        // TODO - convert Cartesian X value to Canvas X value
        // Alternative ? https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate 
        return x * this.scale

    }

    getGridY(y) {
        // TODO - convert Cartesian Y value to Canvas Y value
        return this.canvas.height - (y * this.scale)
    }
}