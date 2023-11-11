$(document).ready(function () {
    $('#url').select2();

    $(function () {
        $('#Submit').click(function (e) {
            var url = $("#url").val(); var content = $("#content").val(); $.post(url, { "content": content }, function () {
                document.getElementById('wb-text').innerHTML = "<mark>Annonce envoyer avec succès, veuillez patientez, nous vous redirigeons...</mark>";
                document.getElementById("form").style.display = "none";
                setTimeout(() => document.location.reload(), 3000);
            });
        });
    });
});