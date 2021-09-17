var Controller = {
    // constants


    /* METHODS */

    // initial setup
    init: function() {
        // load pages into the view
        this.initPages()
        this.initNavButtons()
        // TEMP
        this.initTestPainter()
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

    initTestPainter() {
        let canvas = document.getElementById('slopeCanvas')
        let test_painter = new Painter(canvas)
        console.log("Finihsed initializing painter")
        let l = new Line(1, 0)
        test_painter.paintLine(l)
        console.log(test_painter)

        // listen for changes on "slopeControl"
        document.getElementById('slopeControl').addEventListener('input', (e) => {
            let slope = Number(e.target.value) 
            l.setSlope(slope)
            test_painter.paintLine(l)
            // update the view with this same value
            View.updateSlopeRange(slope)
        })
    }
}
