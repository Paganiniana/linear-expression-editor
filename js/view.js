const CLASS_PAGE_TO_LEFT = 'page-flip-center-left'
const CLASS_PAGE_FROM_LEFT = 'page-flip-left-center'
const CLASS_PAGE_TO_RIGHT= 'page-flip-center-right'
const CLASS_PAGE_FROM_RIGHT = 'page-flip-right-center'

const PAGE_CLASSES = [CLASS_PAGE_FROM_LEFT, CLASS_PAGE_TO_LEFT, CLASS_PAGE_TO_RIGHT, CLASS_PAGE_FROM_RIGHT]

var View = {
    // constants
    page_list: [],
    page_index: 0,

    // methods

    pageLeft: function() {
        if ((this.page_index - 1) < 0) {
            // no pages before this one, cannot turn page
            return
        } else {
            // flip current index to the right
            this.page_list[this.page_index].classList.remove(...PAGE_CLASSES)
            this.page_list[this.page_index].classList.add(CLASS_PAGE_TO_RIGHT)
            // update index
            this.page_index-- 
            // flip next index to center
            this.page_list[this.page_index].classList.remove(...PAGE_CLASSES)
            this.page_list[this.page_index].classList.add(CLASS_PAGE_FROM_LEFT)
        }
    },

    pageRight: function() {
        if ((this.page_index + 1) == this.page_list.length) {
            // at the end of the page list
            return
        } else {
            // flip current index to left
            this.page_list[this.page_index].classList.remove(...PAGE_CLASSES)
            this.page_list[this.page_index].classList.add(CLASS_PAGE_TO_LEFT)
            // update index
            this.page_index++
            // flip next index to center
            this.page_list[this.page_index].classList.remove(...PAGE_CLASSES)
            this.page_list[this.page_index].classList.add(CLASS_PAGE_FROM_RIGHT)

        }
    },

    updateSlopeRange(val) {
        document.getElementById('slopeValue').innerHTML = val
    },

    updateIntRange(val) {
        document.getElementById('intValue').innerHTML = val
    }
}