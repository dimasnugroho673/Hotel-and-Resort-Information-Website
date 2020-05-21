$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('black');
    } else {
        $('.navbar').removeClass('black');
    }
})


// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // parallax
    $('.title h1').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });

    // landing
    // if ( wScroll > $('.superior-gambar').offset().top - 300 ){
    //     $('.superior-gambar').addClass('muncul');
    // }

    
});




function validation(){

    var username = 'dimasnugroho673';
    var password = 'admin';

    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    if((username == userName) && (password == passWord)) {
        Swal(
            'Sukses!',
            'Anda berhasil masuk dan dapat melakukan reservasi!',
            'success'
          )
    }
 
    else {
        Swal({
            type: 'error',
            title: 'Oops...',
            text: 'Username dan Password yang anda masukkan salah!',
            footer: '<a href="https://accounts.google.com/RecoverAccount?hl=in" style="text-decoration: none;" target="_blank">Lupa akun?</a>'
          });
    }

}




