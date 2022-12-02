let images = document.querySelectorAll('.image');
for (image of images) {
    image.addEventListener('mouseover', (event) => event.target.setAttribute("style","padding: 0 10px 10px 0"));
    image.addEventListener('mouseout', (event) => event.target.removeAttribute("style"));
}


// image.addEventListener('mouseover', function (event) {
//     event.target.setAttribute("style","padding: 0 10px 10px 0");
// });