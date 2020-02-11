lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true,
})

// Key up event listener on input that logs out value of input 
$('#main-input').keyup(function() {
    var searchString = $('#main-input').val().toLowerCase();
    console.log(searchString);
});

// Targeting the captions
let captions = $('div.container').children();

console.log(captions);

for (let i = 0; i < captions.length; i++) {
    let cap = $(captions[i]).attr('data-title');
    cap = cap.toLowerCase();
    console.log(cap);
    let bool = cap.includes(searchString);
    console.log(bool);
}
