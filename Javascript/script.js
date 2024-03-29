var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    scrollPos, docHeight;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4;
}

// Add scroll event listener
window.addEventListener('scroll', function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    btt.style.opacity = (offset < scrollPos) ? '1' : '0';
});

// Add click event listener
btt.addEventListener('click', function(event) {
    event.preventDefault();
    if (isFirefox) {
        docElem.scrollTop = 0;
    } else {
        body.scrollTop = 0;
    }
});