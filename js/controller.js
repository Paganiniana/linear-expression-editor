var Controller = {
    // constants


    /* METHODS */

    // initial setup
    init: function() {
        // load pages into the view
        this.initPages()
    },

    initPages: function() {
        let page1 = document.querySelector('#page1')
        let page2 = document.querySelector('#page2')
        let page3 = document.querySelector('#page3')
        let page4 = document.querySelector('#page4')

        // add pages to view
        View.page_list.push(page1, page2, page3, page4)
    }
}
