const get404 = (begin, between, header, footer, end) => `
    ${begin}
        <link rel="stylesheet" href="css/404.css">
        <title>404 Page Not Found</title>
        ${between}
            ${header}
            <div id="main">
                <div class="content">
                    <h2>Whoops!</h2>
                    <div class="main-image">
                        <img src="images/404-graphic.png" alt="">
                    </div>
                    <h1>We couldn't find what you're looking for.</h1>
                    <div class="button">
                        <a href="/">Return to homepage</a>
                    </div>
                </div>
            </div>
            ${footer}
        ${end}
`;

module.exports = get404;