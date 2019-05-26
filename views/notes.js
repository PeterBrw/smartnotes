const getNotes = (begin, between, footer, end) => `
    ${begin}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link rel="stylesheet" href="css/index.css">
            <link rel="stylesheet" href="css/notes.css">
            <title>Notes App</title>
       ${between}
            <div id="header">
                <div class="content">
                    <div class="logo">
                        <a href="/" title="Welcome">
                            <img src="images/logo.svg"/>
                        </a>
                    </div>
                    <input type="text" name="search" placeholder="Search..." id="search">
                    <div class="styled-select">
                        <select name="order" id="">
                            <option value="modified-desc">Modified DESC</option>
                            <option value="modified-asc">Modified ASC</option>
                            <option value="created-desc">Created DESC</option>
                            <option value="created-asc">Created ASC</option>
                        </select>
                    </div>
                    <div class="nav">
                        <a href="/logout.html" title="Logout" class="logout"><i class="fas fa-sign-out-alt"></i>Logout</a>
                    </div>
                </div>
            </div> 
            <main class="fixed-width">
                <form action="" id="new-note">
                    <input type="text" name="title" id="title-input" placeholder="Title">
                    <textarea name="content" id="content-input" placeholder="Take a note..."></textarea>
                    <input type="file" name="image" id="image">
                    <div class="toolbox">
                        <div class="left">
                            <i class="fas fa-palette"></i>
                            <label for="image">
                                <i class="fas fa-image"></i>
                            </label>
                            
                        </div>
                        <div class="right">
                            <input type="submit" id="submit" value="Save note">
                        </div>
                    </div>
                </form>
                <h2>PINNED</h2>
                <div class="pinned">
                    <img class="aws" src="images/1_CAS2UKlhVhNT8O_TzD-YpA@2x.png">
                    <h2 class="pinned-title">Projects & Companies using serverless-chrome</h2>
                    <p class="pinned-first-paragraph">Using AWS Lambda, the quickest way to get started is with the Serverless-framework CLI.</p>
                    <p class="pinned-second-paragraph">First, install serverless globally (npm install -g serverless) and then</p>
                    <p class="pinned-thrid-paragraph">serverless create -u https://github.com/adieuadieu/serverless-chrome/tree/master/examples/<br>serverless-framework/aws</p>
                    <p class="pinned-last-paragraph">Then, you must configure your AWS credentials either by defining AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environmental variables, or using an AWS profile. You can read more about this on the Serverless Credentials Guide.</p>
                    <div class="toolbox">
                        <div class="left">
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-palette"></i>
                            <i class="fas fa-image"></i>
                            <i class="fas fa-trash"></i>
                        </div>
                        <div class="right">
                            <i class="fas fa-thumbtack"></i>
                        </div>
                    </div>
                </div>
                <h2>OTHERS</h2>
                <div class="others">
                    <h2 id="others-title">Projects & Companies using serverless-chrome</h2>
                    <p class="others-first-paragraph">Using AWS Lambda, the quickest way to get started is with the Serverless-framework CLI.</p>
                    <p class="others-second-paragraph">First, install serverless globally (npm install -g serverless) and then</p>
                    <p class="others-thrid-paragraph">serverless create -u https://github.com/adieuadieu/serverless-chrome/tree/master/examples/<br>serverless-framework/aws</p>
                    <p class="others-last-paragraph">Then, you must configure your AWS credentials either by defining AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environmental variables, or using an AWS profile. You can read more about this on the Serverless Credentials Guide.</p>
                    <div class="toolbox">
                        <div class="left">
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-palette"></i>
                            <i class="fas fa-image"></i>
                            <i class="fas fa-trash"></i>
                        </div>
                        <div class="right">
                            <i class="fas fa-thumbtack"></i>
                        </div>
                    </div>
                </div>
                <div class="others others-grey">
                    <h2 id="others-title">Projects & Companies using serverless-chrome</h2>
                    <p class="others-first-paragraph">Using AWS Lambda, the quickest way to get started is with the Serverless-framework CLI.</p>
                    <p class="others-second-paragraph">First, install serverless globally (npm install -g serverless) and then</p>
                    <p class="others-thrid-paragraph">serverless create -u https://github.com/adieuadieu/serverless-chrome/tree/master/examples/<br>serverless-framework/aws</p>
                    <p class="others-last-paragraph">Then, you must configure your AWS credentials either by defining AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environmental variables, or using an AWS profile. You can read more about this on the Serverless Credentials Guide.</p>
                    <div class="toolbox">
                        <div class="left">
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-palette"></i>
                            <i class="fas fa-image"></i>
                            <i class="fas fa-trash"></i>
                        </div>
                        <div class="right">
                            <i class="fas fa-thumbtack"></i>
                        </div>
                    </div>
                </div>
                <div class="others others-white">
                    <h2 id="others-title">Projects & Companies using serverless-chrome</h2>
                    <p class="others-first-paragraph">Using AWS Lambda, the quickest way to get started is with the Serverless-framework CLI.</p>
                    <div class="toolbox">
                        <div class="left">
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-palette"></i>
                            <i class="fas fa-image"></i>
                            <i class="fas fa-trash"></i>
                        </div>
                        <div class="right">
                            <i class="fas fa-thumbtack"></i>
                        </div>
                    </div>
                </div>        
            </main>
            <!-- <hr> -->
            ${footer}
        ${end}
`;

module.exports = getNotes;