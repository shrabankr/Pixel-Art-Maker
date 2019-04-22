// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();   // Take input for height
    width = $('#inputWeight').val();    // Take input for width
    makeGrid(height, width);
})


function makeGrid(m, n) {
    $('tr').remove();      // remove extisting tables if any
// Your code goes here!
    for(var a = 1; a<= m; a++) {
        $('#pixelCanvas').append('<tr id=table' + a + '></tr>');
        for(var b = 1; b <= n; b++) {
            $('#table' + a).append('<td></td>');
        }
    }
    // add color pixel
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
    
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}

