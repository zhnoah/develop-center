$(function() {

    // --------------------------------------------

    var stacksTemp = '';

    function createNpmInstallSentence(arr) {
        return arr.length ? ('cnpm i ' + arr.join(' ') + ' --save') : '';
    }

    function createNpmInstallStackName(stack, version) {
        return stack + (version ? ('@' + version) : '');
    }

    $.each(stacks, function(index, stack) {

        var npmOutputStacks = [];

        stacksTemp += '<table class="table"><caption>' + stack.name + '</caption>' +
            '<thead><tr>';

        if (stack.has_npm_output) {
            stacksTemp += '<th></th>';
        }

        stacksTemp += '<th>名称</th>' +
            '<th>描述</th>' +
            '<th>GitHub</th>' +
            '<th>npm</th>' +
            '<th>Browser Support</th>' +
            '</tr></thead><tbody>';

        $.each(stack.items, function(i, item) {

            stacksTemp += '<tr>';

            if (stack.has_npm_output) {
                stacksTemp += '<td>';

                if (!item.unSelect) {
                    stacksTemp += '<input type="checkbox" data-npmname="' + item.npm_name + '" data-dependencies="' + (item.dependencies && item.dependencies.length ? item.dependencies.join(' ') : '') + '" data-version="' + item.version + '" ' + (item.selected ? 'checked' : '') + '>';
                }

                stacksTemp += '</td>';

                if (item.selected) {
                    npmOutputStacks.push(createNpmInstallStackName(item.npm_name, item.version));

                    if (item.dependencies && item.dependencies.length) {
                        npmOutputStacks.push(item.dependencies.join(' '));
                    }
                }

            }

            stacksTemp += '<td>' + (item.website_url ? ('<a target="_blank" href="' + item.website_url + '">' + item.name + '</a>') : item.name) + '</td>' +
                '<td>' + item.description + '</td>' +
                '<td><a target="_blank" href="' + item.github_url + '">' + item.github_name + '</a></td>' +
                '<td><a target="_blank" href="' + item.npm_url + '">' + item.npm_name + '</a></th>' +
                '<td>' + (item.browser_support_url ? ('<a target="_blank" href="' + item.browser_support_url + '">' + item.ie_support + '</a>') : item.ie_support) + '</td>' +
                '</tr>';

        });

        if (stack.has_npm_output) {
            stacksTemp += '<tr><td class="npm-output text-danger" colspan="6">' + createNpmInstallSentence(npmOutputStacks) + '</td></tr>';
        }

        stacksTemp += '</tbody></table>';

    });

    $('#Stacks').html(stacksTemp);

    // --------------------------------------------

    $('.table').on('click', 'input[type="checkbox"]', function() {
        var $parent = $(this).parents('.table');
        var $selectedStacks = $parent.find('input[type="checkbox"]:checked');
        var $npmOutput = $parent.find('.npm-output');

        var npmOutputStacks = [];

        $.each($selectedStacks, function(i, stack) {
            var $stack = $(stack);
            var npm_name = $stack.attr('data-npmname');
            var version = $stack.attr('data-version');
            var dependencies = $stack.attr('data-dependencies');

            npmOutputStacks.push(createNpmInstallStackName(npm_name, version));

            if (dependencies) {
                npmOutputStacks.push(dependencies);
            }

        });

        $npmOutput.text(createNpmInstallSentence(npmOutputStacks));
    });

    // --------------------------------------------

});
