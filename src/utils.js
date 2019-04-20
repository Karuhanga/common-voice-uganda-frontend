export function toast(message, ok = false) {
    const toast_view = document.getElementById('toast');
    toast_view.innerHTML = message;
    if (ok) {
        toast_view.classList.add('ok');
    } else {
        toast_view.classList.remove('ok');
    }
    toast_view.classList.add('show');
    setTimeout(function () {
        toast_view.classList.remove('show');
    }, 2500);
}
