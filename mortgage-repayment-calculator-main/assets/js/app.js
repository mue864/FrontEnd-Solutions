function changeRadioColor(radio) {
    // Find the currently selected container (if any) and remove the 'selected' class
    const containerRemove = document.querySelector('.selected');
 
    if (containerRemove !== null) {
       containerRemove.classList.remove('selected');
    }
 
    // Add the 'selected' class to the parent div of the clicked radio button
    const containerChange = radio.closest('.radio_container');
    containerChange.classList.add('selected');
 }
 
