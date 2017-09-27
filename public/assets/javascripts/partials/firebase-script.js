'use strict';

var fbScripts = '<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>' + '<script src="https://cdn.bootcss.com/popper.js/1.9.3/umd/popper.min.js" integrity="sha384-knhBOwpf8/28D6ygAjJeb0STNDZqfPbKaWQ8wIz/xgSc0xXwKsKhNype8fmfMka2" crossorigin="anonymous"></script>';

var body = document.getElementsByTagName("body");
console.log(body);
body.appendChild(fbScripts);