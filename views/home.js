const getHomePage = (begin, between, header, footer, end) => `
${begin}
        <link rel="stylesheet" href="./css/index.css" type="text/css" />
    ${between}
        ${header}
        <div id="main">
            <div class="section-jumbotron">
                <div class="content">
                    <h1>A better way to manage <span>notes.</span></h1>
                    <div class="manage-notes">
                        <div class="smart-notes">
                            <h3>SmartNotes it's free!</h3>
                            <ul>
                                <li>
                                    <span></span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </li>
                                <li>
                                    <span></span>
                                    Excepteur sint occaecat cupidatat non proident.
                                </li>
                                <li>
                                    <span></span>
                                    Quis autem vel eum iure reprehenderit quvol uptate lipsum <br> naim dolor emet.
                                </li>
                            </ul>
                            <a href="/login">Get started</a>
                        </div>
                        <div class="mobile-friendly">
                            <img src="images/header-img.png" alt="mobile">
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-customers">
                <div class="content">
                    <h2>Join 25,000+ highly productive teams</h2>
                    <div class="customers-icons">
                        <img src="images/google.png"/>
                        <img src="images/airbnb.png"/>
                        <img src="images/nike.png"/>
                        <img src="images/samsung.png"/>
                        <img src="images/uber.png"/>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="ideas">
                    <div class="capture-ideas">
                        <h2>Capture ideas.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br> nulla pariatur.</p>
                        <a href="/login.html">Login Now</a>
                    </div>
                    <div class="notes-ideas">
                        <img src="images/notes-img.png"/>
                        <img src="images/notes-img.png"/>
                        <img src="images/notes-img.png"/>
                    </div>
                </div>
            </div>
        </div>
        <hr>
       ${footer}
   ${end}`;

module.exports = getHomePage;