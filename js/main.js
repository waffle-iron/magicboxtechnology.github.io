window.onload = function(){

    var jumbotron = document.getElementById('jumbotron');
    // scroll banner on page scroll
    window.addEventListener("scroll", scroll);
    var doc = document.documentElement;
    function scroll(){
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        var y = Math.floor(top/4);

        console.log(y);
        jumbotron.style.backgroundPosition = '0px ' + -y + 'px';
    }
}
