import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.mjs'
// import debounce from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/debounce.js'
// import throttle from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/throttle.js'

await mermaid.run({
  querySelector: 'pre code.language-mermaid',
})

const bindUXToEle = (ele) => {
  let isDragging = false
  let startCoords = null
  const renderState = {
    scale: 1,
    dx: 0,
    dy: 0,
  }

  const updateRenderState = (newState = {}, cb) => {
    let shouldUpdate = false
    for (let key in newState) {
      const newVal = newState[key]
      if (newVal === renderState[key]) {
        continue
      }
      shouldUpdate = true // TODO: 减少赋值
      renderState[key] = newVal
    }
    if (shouldUpdate) {
      renderEle(cb)
    }
  }

  const updateStartCoords = (x, y) => {
    if (!startCoords) {
      startCoords = [] // init
    }
    startCoords[0] = x
    startCoords[1] = y
  }

  const resetStartCoords = () => {
    startCoords = null
  }

  const calculateOffset = (x, y) => {
    const sX = startCoords?.[0] ?? 0;
    const sY = startCoords?.[1] ?? 0;
    return [x - sX, y - sY]
  }

  let willRender = false
  const renderEle = (cb) => {
    if (willRender) return
    willRender = true
    requestAnimationFrame(() => {
      willRender = false
      const { dx, dy, scale } = renderState
      const newAttr = 'translate(' + dx + ',' + dy + ') scale(' + scale + ')'

      if (ele.getAttribute('transform') !== newAttr) {
        ele.setAttribute('transform', newAttr)
      }
      cb?.()
    })
  }

  const handleMouseDown = (e) => {
    isDragging = true
    updateStartCoords(e.x, e.y)
  }
  // 鼠标按下事件
  ele.addEventListener('mousedown', handleMouseDown, true)

  // let moveCounter = 0;
  const handleMouseMove = (e) => {
    if (!isDragging) return
    const [newDx, newDy] = calculateOffset(e.x, e.y)
    // const newDx = e.movementX;
    // const newDy = e.movementX;
    updateRenderState({
      dx: newDx,
      dy: newDy, //
    }, () => {
      //  updateStartCoords(e.x, e.y)
    })
    // updateStartCoords(e.x, e.y)
  }
  // 鼠标移动事件
  ele.addEventListener('mousemove', handleMouseMove, true)

  const handleMouseUp = () => {
    isDragging = false
    resetStartCoords()
  }
  // 鼠标释放事件
  ele.addEventListener('mouseup', handleMouseUp, true)

  const getSafeScale = (newScale, min, max) => {
    return Math.max(Math.min(newScale, max), min)
  }
  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.3 : 0.3 // 缩放因子
    updateRenderState({
      scale: getSafeScale(renderState.scale + delta, 1 / 3, 15),
    })
  }
  // 鼠标滚轮事件
  ele.addEventListener('wheel', handleWheel, true)
}

await mermaid.run({
  querySelector: 'pre code.language-mermaid',
})

const allSVGList = document.querySelectorAll('pre code.language-mermaid svg')
allSVGList.forEach((svg) => {
  svg.setAttribute('height', '500px')
})
allSVGList.forEach(bindUXToEle)
