var dropdownVisible = false; // Variable to track the current state

document.getElementById('dropdown-toggle').addEventListener('click', function () {
    var dropdown = document.getElementById('dropdown');
    var arrow = document.querySelector('#dropdown-toggle .arrow');

    if (!dropdownVisible) {
        // Dropdown is currently hidden
        dropdown.style.height = dropdown.scrollHeight + 'px';
        arrow.classList.add('rotate180');
    } else {
        // Dropdown is currently visible
        var initialHeight = window.innerWidth <= 767 ? '100px' : '125px';
        dropdown.style.height = initialHeight;
        arrow.classList.remove('rotate180');
    }

    // Toggle the state for the next click
    dropdownVisible = !dropdownVisible;
});