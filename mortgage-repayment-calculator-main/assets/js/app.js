function changeRadioColor(radio) {
    document.querySelectorAll('.radio_container').forEach(container => {
        container.classList.remove('selected');
    });

    radio.parentElement.classList.add('selected');
}

