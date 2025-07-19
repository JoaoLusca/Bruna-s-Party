document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');

    if (envelope) {
        envelope.addEventListener('click', () => {
            // Aqui você pode adicionar a lógica para a próxima página
            // Por exemplo, redirecionar para uma nova página HTML:
            window.location.href = 'convite.html'; // Altere 'convite.html' para o nome da sua próxima página

            // Ou, se for uma SPA (Single Page Application), pode esconder esta seção e mostrar a próxima:
            // document.querySelector('.container').style.display = 'none';
            // document.getElementById('proxima-secao-convite').style.display = 'block';
        });
    }
});
