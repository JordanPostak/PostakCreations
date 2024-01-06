document.getElementById('dropdown-toggle').addEventListener('click', function () {
    var dropdown = document.getElementById('dropdown');
    var arrow = document.querySelector('#dropdown-toggle .arrow');

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('unhidden');
        dropdown.style.height = dropdown.scrollHeight + 'px'; // Set height to the actual height
        arrow.classList.add('rotate180');
    } else {
        dropdown.classList.remove('unhidden');
        dropdown.classList.add('hidden');

        // Set different initial height based on screen width
        var initialHeight = window.innerWidth <= 767 ? '100px' : '125px';

        dropdown.style.height = initialHeight;
        arrow.classList.remove('rotate180');
    }
});