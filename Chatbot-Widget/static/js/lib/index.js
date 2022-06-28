
/* module for importing other js files */
function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'application/json';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./static/js/lib/jquery.min.js');
include('./static/js/lib/materialize.min.js');
include('./static/js/lib/chart.min.js');
include('./static/js/lib/uuid.min.js');
