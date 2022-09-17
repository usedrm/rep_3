export const imgerror = {
  inserted(dom, options) { // dom元素插入到节点后执行
    dom.onerror = function() {
      dom.src = options.value
    }
  }
}
