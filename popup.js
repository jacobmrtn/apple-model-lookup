let mn_input = document.getElementById('m_number')

mn_input.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && mn_input.value.length != 0) {
        window.open(`https://www.macupgrades.co.uk/store/mac_model_number/${mn_input.value}`)
        mn_input.value == null
    }
})
