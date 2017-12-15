$(function() {

    // --------------------------------------------

    var softwaresTemp = '';

    $.each(softwares, function(index, software) {

        softwaresTemp += '<dl class="dl-horizontal software-container">' +
            '<dt>' + software.name + '：</dt>' +
            '<dd><ul>';

        $.each(software.items, function(i, item) {

            softwaresTemp += '<li class="' + item.classes.join(' ') + '">' + (item.url ? ('<a href="' + item.url + '" target="_blank">' + item.name + '</a>') : item.name) + '</li>';

        });

        softwaresTemp += '</ul></dd></dl>';

    });

    $('#Softwares').html(softwaresTemp);

    // --------------------------------------------

    var $softwareItems = $('.software-container li');

    function setShowOrHide() {
        var selected = $('input[name="system"]:checked').val();

        $softwareItems.each(function() {
            var $this = $(this);

            if ((selected !== '2' && $this.hasClass('win')) || (selected !== '1' && $this.hasClass('mac'))) {
                $this.css('display', 'inline-block');
            } else {
                $this.hide();
            }
        });
    }

    setShowOrHide();

    $('input[name="system"]').on('click', function() {
        setShowOrHide();
    });

});
