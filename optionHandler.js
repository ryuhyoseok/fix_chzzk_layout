(async () => {
    function debounce(func, timeout = 300) {
        let timer
        return (...args) => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, timeout)
        }
      }

    const radios = document.querySelectorAll('input[name=layoutOption]')
    const responsiveWidthInput = document.querySelector('#responsiveWidth')

    const {layoutType, responsiveWidth = 900 } = (await chrome.storage.sync.get(['layoutType', 'responsiveWidth']) || {})

    if (layoutType) {
        const selectedRadio = document.querySelector(`#${layoutType}`)
        if (selectedRadio) selectedRadio.checked = true
    }

    if (responsiveWidth) {
        responsiveWidthInput.value = responsiveWidth
    }

    if (!(radios.length > 0)) return

    radios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (!radio.checked) return
            console.log('responsiveWidthInput', responsiveWidthInput.value)
            chrome.storage.sync.set({ layoutType: radio.id, responsiveWidth: responsiveWidthInput.value })
        })
    })

    responsiveWidthInput.addEventListener('input', debounce(() => {
        console.log('set', responsiveWidthInput.value)
        chrome.storage.sync.set({ responsiveWidth: responsiveWidthInput.value })
    }, 500))
})()
