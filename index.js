
function handleScroll() {
    $("#about").click(function (event) {
        $('html, body').animate({ scrollTop: '550px' }, 1100);
    });
    $("#contact").click(function (event) {
        $('html, body').animate({ scrollTop: '3500px' }, 1100);
    });
    $("#projects").click(function (event) {
        $('html, body').animate({ scrollTop: '1350px' }, 1100);
    })
}
$(handleScroll);