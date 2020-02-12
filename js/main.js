// Plugin configuration

lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true,
})

// Key up event listener on input that logs out value of input 

let captions = $('div.container').children();

$('#main-input').keyup(function() {
    let searchString = $('#main-input').val().toLowerCase();
    for (let i = 0; i < captions.length; i++) {
        let cap = $(captions[i]).attr('data-title');
        cap = cap.toLowerCase();
        let match = cap.includes(searchString);
        if (!match) {
            $(captions[i]).addClass('hide');
        } else if (match) {
            $(captions[i]).removeClass('hide');
        }
    };
});


