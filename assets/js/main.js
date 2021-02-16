/*----- freetool tabs ( freetool page ) -----*/
//function openTool(evt, toolName) {
//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabTool");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(toolName).style.display = "block";
//    evt.currentTarget.className += " active";
//}
/////////////////////
(function () {
    var d = document,
        radioTabs = d.querySelector('.radio_tabs'),
        tab = d.querySelectorAll('li'),
        contents = d.querySelectorAll('.content');
    radioTabs.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            // change tabs
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove('active');
            }
            e.target.classList.toggle('active');


            // change content
            for (i = 0; i < contents.length; i++) {
                contents[i].classList.remove('active');
            }

            var tabId = '#' + e.target.dataset.tabId;
            d.querySelector(tabId).classList.toggle('active');
        }
    });
})();
