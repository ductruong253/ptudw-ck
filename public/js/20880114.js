(function () {
    function chooseMenu() {
        const query = new URLSearchParams(location.search)
        const currentMenu = query.get('currentMenu')
        if (currentMenu) {
            $(`[data-filter="${currentMenu}"]`).click()
        } else {
            $(`[data-filter=".menu-restaurant"]`).click()
        }
    }

    document.addEventListener("DOMContentLoaded", event=>{
        chooseMenu()
    })
})()