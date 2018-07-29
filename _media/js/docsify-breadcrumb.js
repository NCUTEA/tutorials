(function () {

    // 面包屑插件
    function install(hook, vm) {
        hook.beforeEach(function (html) {

            let fullPath = vm.route.path;
            let sp = fullPath.split('/');

            let headerHtml = ``;

            let endWithSlash = fullPath.endsWith("/");

            let curPath = '/';
            headerHtml += `[index](/) / `;

            // 跳过第一个 ""
            for (let i = 1, len = sp.length; i < len; i++) {
                let path = sp[i];
                curPath += path;


                let addSlashInDisplay = (i < len - 2 ||
                    (i === len - 2 && !endWithSlash)
                );

                let addSlashInCurPath = !(i === len - 1 && !endWithSlash);

                if (addSlashInCurPath)
                    curPath += '/';

                headerHtml += `[${path}](${curPath})`;

                if (addSlashInDisplay)
                    headerHtml += ' / ';
            }

            headerHtml += '\n\n----\n\n';

            return headerHtml + html;

        })

    }

    $docsify.plugins = [].concat(install, $docsify.plugins);

}());
