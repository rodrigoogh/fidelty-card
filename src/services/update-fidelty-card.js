export function updateFideltyCard(stampsCount) {
    const stamps = document.querySelectorAll(".stamps .stamp")
    stamps.forEach(stamp => {
        if (stampsCount > 0) {
            stamp.classList.add("checked")
            stampsCount--
        } else {
            stamp.classList.remove("checked")
        }
    });
}