(async () => {
    const {layoutType, responsiveWidth } = (await chrome.storage.sync.get(['layoutType', 'responsiveWidth']) || {})

    console.log(
        'layoutType', layoutType, 'responsiveWidth', responsiveWidth
    )

    const STRICT_STYLE_ID = '_chzzk_fix_position_strict'
    const RESPONSIVE_STYLE_ID = '_chzzk_fix_position_responsive'
    const MAIN_STYLE_STRING = `
    section[class*=large] div[class*=large] {
        height: 100%;
        z-index: 10
    }
    `
    const ASIDE_STYLE_STRING = `
    section[class*=large] aside {
        position: fixed;
        top: 56.25vw;
        width: 100%;
        height: calc(100% - 56.25vw);
    }
    `

    function fixSectionLayoutStrict() {
        const strictStyle = document.querySelector(`#${STRICT_STYLE_ID}`)
        if (strictStyle) return

        const newStyle = document.createElement('style')
        newStyle.id = STRICT_STYLE_ID

        const styleString = `
        ${MAIN_STYLE_STRING}
        ${ASIDE_STYLE_STRING}
        `
        newStyle.innerHTML = styleString
        document.body.appendChild(newStyle)
    }

    function fixSectionLayoutResponsive() {
        const responsiveStyle = document.querySelector(`#${RESPONSIVE_STYLE_ID}`)
        if (responsiveStyle) return

        const newStyle = document.createElement('style')
        newStyle.id = RESPONSIVE_STYLE_ID

        const styleString = `
        @media(max-width: ${responsiveWidth}px) {
            ${MAIN_STYLE_STRING}
            ${ASIDE_STYLE_STRING}
        }
        `
        newStyle.innerHTML = styleString
        document.body.appendChild(newStyle)
    }

    if (layoutType === 'responsive') fixSectionLayoutResponsive()
    else if (layoutType === 'strict') fixSectionLayoutStrict()
})()
