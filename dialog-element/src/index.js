function dialogManager() {
    const myDialog = document.getElementById('myDialog');
    const showMyDialog = document.getElementById('showMyDialog');
    const closeMyDialog = document.getElementById('closeMyDialog');

    showMyDialog.addEventListener('click', function () {
        if (typeof myDialog.showModal === "function") {
            myDialog.showModal();
        } else {
            console.error("Ouch, <dialog> API is not supported in your browser!");
        }
    });

    closeMyDialog.addEventListener('click', function () {
        myDialog.close();
    });

}
