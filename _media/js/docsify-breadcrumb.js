/*!
 * docsify-breadcrumb
 * v0.0.2
 * (c) 2018 NoCLin
 * MIT license
 */
(function () {
    // 面包屑插件
    function install(hook, vm) {
        hook.beforeEach(function (html) {

            let fullPath = vm.route.path;
            let sp = fullPath.split('/');
            let endWithSlash = fullPath.endsWith("/");

            let curPath = '';
            let headerHtml = `[Index](/README.md)`;

            for (let i = 0, len = sp.length; i < len; i++) {
                let path = sp[i];
                curPath += path;

                if (i < len - 1 || endWithSlash)
                    curPath += '/';

                headerHtml += `[${path}](${curPath})`;

                if (i < len - 2 || (i === len - 2 && !endWithSlash))
                    headerHtml += ' / ';
            }

            headerHtml += '\n\n----\n\n';

            return headerHtml + html;

        })
    }

    $docsify.plugins = [].concat(install, $docsify.plugins);

}());
