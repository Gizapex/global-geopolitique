$(document).ready(function () {
    $('#url').select2();

    $(function () {
        $('#Submit').click(function (e) {
            e.preventDefault();

            var url = $("#url").val();
            var content = $("#content").val();
            var imageInput = $("#image")[0];

            if (imageInput.files.length > 0) {
                var formData = new FormData();
                formData.append("content", content);
                formData.append("image", imageInput.files[0]);

                $.ajax({
                    url: url,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function () {
                        document.getElementById('wb-text').innerHTML = "<mark>Annonce envoyée avec succès, veuillez patienter, nous vous redirigeons...</mark>";
                        document.getElementById("form").style.display = "none";
                        setTimeout(() => document.location.reload(), 3000);
                    }
                });
            } else {
                // Si aucune image n'est sélectionnée, envoyer seulement le texte
                $.post(url, { "content": content }, function () {
                    document.getElementById('wb-text').innerHTML = "<mark>Annonce envoyée avec succès, veuillez patienter, nous vous redirigeons...</mark>";
                    document.getElementById("form").style.display = "none";
                    setTimeout(() => document.location.reload(), 3000);
                });
            }
        });
    });
    $('.m-nav-toggle').click(function(e){
        e.preventDefault();
        $('.m-right').toggleClass('is-open');
        $('.m-nav-toggle').toggleClass('is-open');
})
});
