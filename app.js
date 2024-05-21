document.addEventListener('DOMContentLoaded', function () {
    const textAreas = document.querySelectorAll('.text-area');

    document.querySelector('.bold-btn').addEventListener('click', function () {
        toggleStyle('bold');
    });

    document.querySelector('.italic-btn').addEventListener('click', function () {
        toggleStyle('italic');
    });

    document.getElementById('color-picker').addEventListener('change', function (event) {
        changeColor(event.target.value);
    });

    document.querySelector('.increase-font-size-btn').addEventListener('click', function () {
        changeFontSize(1);
    });

    document.querySelector('.decrease-font-size-btn').addEventListener('click', function () {
        changeFontSize(-1);
    });

    document.getElementById('image-input').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                document.execCommand('insertImage', false, imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });

    function toggleStyle(style) {
        textAreas.forEach(function (textarea) {
            document.execCommand(style);
        });
    }

    function changeFontSize(change) {
        textAreas.forEach(function (textarea) {
            const currentFontSize = parseInt(window.getComputedStyle(textarea).fontSize);
            const newFontSize = currentFontSize + change;
            if (newFontSize >= 1) {
                textarea.style.fontSize = newFontSize + 'px';
            }
        });
    }

    function changeColor(color) {
        textAreas.forEach(function (textarea) {
            textarea.style.color = color;
        });
    }
});
