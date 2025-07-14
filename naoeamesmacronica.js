document.addEventListener('DOMContentLoaded', function () {
    const cronicas = document.querySelectorAll('.container > div');

    cronicas.forEach(function (cronica) {
        cronica.addEventListener('click', function () {
            // Fecha outras crônicas
            cronicas.forEach(c => {
                if (c !== cronica && c.classList.contains('expanded')) {
                    c.classList.remove('expanded');
                }
            });
            // Alterna a classe 'expanded' no elemento clicado
            this.classList.toggle('expanded');
        });
    });
});