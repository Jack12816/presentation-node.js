/**
 * Custom JS
 */

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,
    keyboard: true,
    backgroundTransition: "convex",
    transition: "linear",
    themeFont: "josefine",
    themeColor: "sand-grey",
    autoSlide: 0,
    previewLinks: false,
    loop: false,
    rtl: false,
    // theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    // transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',
    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'components/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});

// Add default slide change event
Reveal.addEventListener('slidechanged', function(e) {

    var isGreppy = $(e.currentSlide).hasClass('greppy');

    if (isGreppy) {
        $('#forkme-img').attr('src', 'img/forkme_white.png');
    } else {
        $('#forkme-img').attr('src', 'img/forkme.png');
    }
});

