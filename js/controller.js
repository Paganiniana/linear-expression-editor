var Controller = {
    // constants
    slope_input_ratio: 10,
    y_int_input_ratio: 10,

    /* METHODS */

    // initial setup
    init: function() {
        // load pages into the view
        this.initPages()
        this.initNavButtons()
        // initialize canvases
        this.initSlopePainter()
        this.initSimpleIntPainter()
        this.initComboPainter()
    },

    initPages: function() {
        let page1 = document.querySelector('#page1')
        let page2 = document.querySelector('#page2')
        let page3 = document.querySelector('#page3')
        let page4 = document.querySelector('#page4')

        // add pages to view
        View.page_list.push(page1, page2, page3, page4)
    },

    initNavButtons: function() {
        // get all "next" buttons and connect them to the view
        document.querySelectorAll('.button-forward').forEach((element) => {
            element.addEventListener('click', (click_event) => {
                // flip forward
                View.pageRight()
            })
        })

        // get all "previous" buttons and connect them to the view
        document.querySelectorAll('.button-back').forEach((element) => {
            element.addEventListener('click', (click_event) => {
                // flip backward
                View.pageLeft()
            })
        })
    },

    // Painters

    initSlopePainter() {
        let canvas = document.getElementById('slopeCanvas')
        let test_painter = new Painter(canvas)
        Model.simple_slope = new Line(1, 0)
        test_painter.paintLine(Model.simple_slope)

        // listen for changes on "slopeControl"
        document.getElementById('slopeControl').addEventListener('input', (e) => {
            let slope = Number(e.target.value)  / this.slope_input_ratio
            // update the model
            Model.simple_slope.setSlope(slope)
            test_painter.paintLine(Model.simple_slope)
            // update the view with this same value
            View.updateSlopeRange(slope)
        })
    },

    initSimpleIntPainter() {
        let canvas = document.getElementById('intCanvas')
        let test_painter = new Painter(canvas)
        Model.simple_y_int = new Line(1, 0)
        test_painter.paintLine(Model.simple_y_int)

        // listen for changes on "intControl"
        document.getElementById('intControl').addEventListener('input', (e) => {
            let y_int = Number(e.target.value)  / this.y_int_input_ratio
            // update the model
            Model.simple_y_int.setIntercept(y_int)
            test_painter.paintLine(Model.simple_y_int)
            // update the view with this same value
            View.updateIntRange(y_int)
        })
    },

    initComboPainter() {
        let canvas = document.getElementById('comboCanvas')
        let test_painter = new Painter(canvas)
        // initialize the line
        Model.combo_y_int = new Line(1, 0)
        test_painter.paintLine(Model.combo_y_int)
        // set listener on combo slope-control
        document.getElementById('comboControlSlope').addEventListener('input', (e) => {
            let slope = Number(e.target.value)  / this.slope_input_ratio
            // update the model
            Model.combo_y_int.setSlope(slope)
            test_painter.paintLine(Model.combo_y_int)
            // update the view with this same value
            View.updateComboSlope(slope)
        })

        // set listener on combo intercept control
        document.getElementById('comboControlInt').addEventListener('input', (e) => {
            let y_int = Number(e.target.value)  / this.y_int_input_ratio
            // update the model
            Model.combo_y_int.setIntercept(y_int)
            test_painter.paintLine(Model.combo_y_int)
            // update the view with this same value
            View.updateComboInt(y_int)
        })
    }
}
