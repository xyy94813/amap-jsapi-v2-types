/**
 * let element can pan and zoom
 * @param {HTMLElement} ele 
 */
const panAndZoom = (ele) => {
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
        const [offsetDx, offsetDy] = calculateOffset(e.x, e.y)
        updateRenderState({
            dx: renderState.dx + offsetDx,
            dy: renderState.dy + offsetDy, //
        }, () => {
            //  updateStartCoords(e.x, e.y)
        })
        updateStartCoords(e.x, e.y)
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

export default panAndZoom;