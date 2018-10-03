$(function () { $('#tree_browsing').jstree(); });

$("#tree_browsing").jstree({
    
    "types" : {
        "default" : {
            "icon" : "images/browser.png"
        },
        "demo" : {
            "icon" : "images/folder.png"
        }
    },
    
    "plugins" : ["themes","html_data","ui","types", "search"] });

$(function () {
    var to = false;
    $('#search').keyup(function () {
        if(to) { clearTimeout(to); }
        to = setTimeout(function () {
            var v = $('#search').val();
            $('#tree_browsing').jstree(true).search(v);
        }, 250);
    });
});


$('#expand_all').click(function () {
    $('#tree_browsing').jstree('open_all');
});

$('#compress_all').click(function () {
    $('#tree_browsing').jstree('close_all');
});












$("#tree_browsing").on("click", "#google", function() 
{
    window.open('https://www.google.com/','_blank');
});

$("#tree_browsing").on("click", "#gmail", function() 
{
    window.open('https://www.google.com/gmail/about/','_blank');
});

$("#tree_browsing").on("click", "#outlook", function() 
{
    window.open('https://outlook.live.com/owa/','_blank');
});

$("#tree_browsing").on("click", "#yahoo", function() 
{
    window.open('https://login.yahoo.com/','_blank');
});

$("#tree_browsing").on("click", "#prothomalo", function() 
{
    window.open('https://www.prothomalo.com/','_blank');
});

$("#tree_browsing").on("click", "#nayadiganta", function() 
{
    window.open('http://www.dailynayadiganta.com/','_blank');
});

$("#tree_browsing").on("click", "#facebook", function() 
{
    window.open('https://www.facebook.com/','_blank');
});

$("#tree_browsing").on("click", "#youtube", function() 
{
    window.open('https://www.youtube.com/','_blank');
});

$("#tree_browsing").on("click", "#qdownloader", function() 
{
    window.open('https://qdownloader.net/','_blank');
});

$("#tree_browsing").on("click", "#savefrom_net", function() 
                       {
    window.open('https://en.savefrom.net/','_blank');
});

$("#tree_browsing").on("click", "#bioscope", function() 
{
    window.open('https://www.bioscopelive.com/en/','_blank');
});

$("#tree_browsing").on("click", "#imdb", function() 
{
    window.open('https://www.imdb.com/','_blank');
});

$("#tree_browsing").on("click", "#subscene", function() 
{
    window.open('https://subscene.com/','_blank');
});










$("#tree_browsing").on("click", "#torrentz2", function() 
{
    window.open('https://torrentz2.eu/my','_blank');
});

$("#tree_browsing").on("click", "#thepiratebay", function() 
{
    window.open('https://thepiratebay.org/','_blank');
});

$("#tree_browsing").on("click", "#kickasstorrents", function() 
{
    window.open('https://katcr.co/','_blank');
});

$("#tree_browsing").on("click", "#yify", function() 
{
    window.open('https://yts.am/','_blank');
});

$("#tree_browsing").on("click", "#1337x", function() 
{
    window.open('https://1337x.to/','_blank');
});

$("#tree_browsing").on("click", "#more_torrents", function() 
{
    window.open('https://dailybrowsing.github.io/page/torrent.html','_blank');
});









$("#tree_browsing").on("click", "#music_com_bd", function() 
{
    window.open('https://www.music.com.bd/','_blank');
});

$("#tree_browsing").on("click", "#doridro", function() 
{
    window.open('http://doridro.com/','_blank');
});

$("#tree_browsing").on("click", "#deezer", function() 
{
    window.open('https://www.deezer.com/us/','_blank');
});







$("#tree_browsing").on("click", "#cricbuzz", function() 
{
    window.open('https://www.cricbuzz.com/','_blank');
});








$("#tree_browsing").on("click", "#gc_search_by_image", function() 
{
    window.open('https://chrome.google.com/webstore/detail/search-by-image-by-google/dajedkncpodkggklbegccjpmnglmnflm?utm_source=chrome-app-launcher-info-dialog','_blank');
});

$("#tree_browsing").on("click", "#gc_adblock_plus", function() 
{
    window.open('https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb','_blank');
});

$("#tree_browsing").on("click", "#gc_browsec_vpn", function() 
{
    window.open('https://chrome.google.com/webstore/detail/browsec-vpn-free-and-unli/omghfjlpggmjjaagoclmmobgdodcjboh','_blank');
});

$("#tree_browsing").on("click", "#gc_age_restriction_bypass_for_youtube", function() 
{
    window.open('https://chrome.google.com/webstore/detail/age-restriction-bypass-fo/idcgcddddikdniemhklllnbillohblpn','_blank');
});

$("#tree_browsing").on("click", "#gc_fbdown_video_downloader", function() 
{
    window.open('https://chrome.google.com/webstore/detail/fbdown-video-downloader/fhplmmllnpjjlncfjpbbpjadoeijkogc','_blank');
});

$("#tree_browsing").on("click", "#gc_search_on_youtube", function() 
{
    window.open('https://chrome.google.com/webstore/detail/search-on-youtube/nldmhmdlcadllplilaojhbdpknchcmec','_blank');
});

$("#tree_browsing").on("click", "#gc_more_extensions", function() 
{
 window.open('https://dailybrowsing.github.io/page/chrome_extensions.html','_blank');
});





$("#tree_browsing").on("click", "#mf_search_image", function() 
{
    window.open('https://addons.mozilla.org/en-US/firefox/addon/search-image/','_blank');
});

$("#tree_browsing").on("click", "#mf_image_search_for_google", function() 
{
    window.open('https://addons.mozilla.org/en-US/firefox/addon/image-search-for-google/','_blank');
});

$("#tree_browsing").on("click", "#mf_adblock_plus", function() 
{
    window.open('https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/','_blank');
});

$("#tree_browsing").on("click", "#mf_browsec_vpn", function() 
{
    window.open('https://addons.mozilla.org/en-US/firefox/addon/browsec/','_blank');
});

$("#tree_browsing").on("click", "#mf_search_in_youtube", function() 
{
    window.open('https://addons.mozilla.org/en-US/firefox/addon/search-in-youtube/','_blank');
});

$("#tree_browsing").on("click", "#mf_ageless_for_youtube", function() 
{
    window.open('https://addons.mozilla.org/en-US/firefox/addon/ageless/','_blank');
});

$("#tree_browsing").on("click", "#mf_more_addons", function() 
{
window.open('https://dailybrowsing.github.io/page/mozilla_addons.html','_blank');
});








$("#tree_browsing").on("click", "#mozilla_firefox", function() 
{
    window.open('https://www.mozilla.org/en-US/firefox/new/','_blank');
});

$("#tree_browsing").on("click", "#google_chorme", function() 
{
    window.open('https://www.google.com/chrome/?brand=CHBD&gclid=CIqak4DbttACFUQfaAodJXoH2A','_blank');
});

$("#tree_browsing").on("click", "#winrar", function() 
{
    window.open('https://www.rarlab.com/download.htm','_blank');
});

$("#tree_browsing").on("click", "#foxit_reader", function() 
{
    window.open('https://www.foxitsoftware.com/downloads/','_blank');
});

$("#tree_browsing").on("click", "#evince", function() 
{
    window.open('https://wiki.gnome.org/Apps/Evince/Downloads','_blank');
});

$("#tree_browsing").on("click", "#vlc", function() 
{
    window.open('http://www.videolan.org/vlc/download-windows.html','_blank');
});

$("#tree_browsing").on("click", "#splayer", function() 
{
    window.open('http://splayer.org/','_blank');
});

$("#tree_browsing").on("click", "#jetaudio", function() 
{
    window.open('http://www.jetaudio.com/','_blank');
});

$("#tree_browsing").on("click", "#freedownloadmanager", function() 
{
    window.open('https://www.freedownloadmanager.org/','_blank');
});

$("#tree_browsing").on("click", "#idm", function() 
{
    window.open('https://www.internetdownloadmanager.com/','_blank');
});

$("#tree_browsing").on("click", "#microsoft_security_essentials", function() 
{
    window.open('https://support.microsoft.com/en-us/help/14210/security-essentials-download','_blank');
});

$("#tree_browsing").on("click", "#avast", function() 
{
    window.open('https://www.avast.com/index','_blank');
});

$("#tree_browsing").on("click", "#teamviewer", function() 
{
    window.open('https://www.teamviewer.com/en/download/windows/?pid=google.tv.teamviewer_exact_sl2.s.int&gclid=CL720vWTjdACFQkfaAodrVEH_g','_blank');
});

$("#tree_browsing").on("click", "#skype", function() 
{
    window.open('http://www.skype.com/','_blank');
});

$("#tree_browsing").on("click", "#utorrent", function() 
{
    window.open('https://www.utorrent.com/','_blank');
});

$("#tree_browsing").on("click", "#ytd", function() 
{
    window.open('https://www.ytddownloader.com/','_blank');
});

$("#tree_browsing").on("click", "#flux", function() 
{
    window.open('https://justgetflux.com/','_blank');
});

$("#tree_browsing").on("click", "#ccleaner", function() 
                       {
    window.open('https://www.ccleaner.com/ccleaner/download','_blank');
});

$("#tree_browsing").on("click", "#notepad_plus_plus", function() 
                       {
    window.open('https://notepad-plus-plus.org/','_blank');
});

$("#tree_browsing").on("click", "#more_windows_software", function() 
{
window.open('https://dailybrowsing.github.io/page/windows_software.html','_blank');
});






/*

$("#tree_browsing").on("click", "#", function() 
{
    window.open('','_blank');
});


*/

