$(document).ready(function () {
    // Alterna o menu móvel quando o botão é clicado
    $('#mobile_btn').on('click', function (event) {
        event.stopPropagation();
        var mobileMenu = $('#mobile_menu');

        if (mobileMenu.hasClass('hide')) {
            mobileMenu.removeClass('hide').addClass('active');
        } else if (mobileMenu.hasClass('active')) {
            mobileMenu.removeClass('active').addClass('hide');
        } else {
            mobileMenu.addClass('active');
        }

        // Alterna o ícone do botão
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });

    // Esconde o menu móvel quando o usuário clica fora dele
    $(document).on('click', function (event) {
        var mobileMenu = $('#mobile_menu');

        if (!$(event.target).closest('#mobile_menu').length && !$(event.target).is('#mobile_btn')) {
            if (mobileMenu.hasClass('active')) {
                mobileMenu.removeClass('active').addClass('hide');
                $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars');
            }
        }
    });

    // Função para voltar ao topo da página
    window.backToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});
