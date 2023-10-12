$('.owl-carousel').owlCarousel({
    rtl:true,  
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(document).ready(function(){

    /*Rahabe*/
    $('#massagista-01').load("../modal/modal-massagista-01.html");
    /*Lya*/
    $('#massagista-02').load("../modal/modal-massagista-02.html");
    /*Isabelle*/
    $('#massagista-03').load("../modal/modal-massagista-03.html");
    /*Celine*/
    $('#massagista-04').load("../modal/modal-massagista-04.html");
    /*Andressa*/
    $('#massagista-05').load("../modal/modal-massagista-05.html");
    /*Helena*/
    $('#massagista-06').load("../modal/modal-massagista-06.html");
    /*Nayade*/
    $('#massagista-07').load("../modal/modal-massagista-07.html");
    /*Eline*/
    $('#massagista-08').load("../modal/modal-massagista-08.html");
    /*Emanuelle*/
    $('#massagista-09').load("../modal/modal-massagista-09.html");
    /*Savio*/
    $('#massagista-10').load("../modal/modal-massagista-10.html");
    /*Susan*/
    $('#massagista-11').load("../modal/modal-massagista-11.html");

    /*Cupom de desconto*/
    $('#cupomDeDesconto').load("../modal/modal-cupom-desconto.html");

    /*Massagem tantrica*/
    $('#massagemTantrica').load("../modal/modal-massagem-tantrica.html");
    /*Massagem Relaxante*/
    $('#massagemRelaxante').load("../modal/modal-massagem-relaxante.html");
    /*Massagem Tailandesa*/
    $('#massagemTailandesa').load("../modal/modal-massagem-tailandesa.html");
    /*Massagem vivencia*/
    $('#massagemVivencia').load("../modal/modal-massagem-vivencia.html");
    /*Massagem Premium*/
    $('#massagemPremium').load("../modal/modal-massagem-premium.html");

});

function abreModalTantrica() {
    $('#modalMassagemTantrica').modal('show');
}

function abreModalRelaxante() {
    $('#modalMassagemRelaxante').modal('show');
}

function abreModalTailandesa() {
    $('#modalMassagemTailandesa').modal('show');
}

function abreModalVivencia() {
    $('#modalMassagemVivencia').modal('show');
}

function abreModalPremium() {
    $('#modalMassagemPremium').modal('show');
}

$('#sbClub').click(function(){
    window.open("https://www.instagram.com/santosbarbeariaclubb/");
    
})

$('#massagem-fortaleza').click(function(){
    window.open("https://www.massagememfortaleza.com.br/");
})



