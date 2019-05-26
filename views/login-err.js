const getLoginErr = (begin, between, header, footer, end) => `
    ${begin}
            <link rel="stylesheet" href="css/signup-login.css">
            <link rel="stylesheet" href="css/error.css">
            <title>Login - error</title>
        ${between}
            <div class="main">
                <div class="form-container">
                    ${header}
                    <div class="form" id="form">
                        <h3 class="form-title">Login</h3>
                        <form action="">
                            <div class="input-group">
                                <label for="mail">Email</label>
                                <input type="email" name="email" id="mail" placeholder="Email" required/>
                            </div>
                            <div class="input-group">
                                <label for="pass">Password</label>
                                <input type="password" name="password" id="pass" placeholder="Password" required/> 
                            </div>
                            <div class="remember-me">
                                <input type="checkbox" id="remember-me">
                                <label for="remember-me">Remember me</label>
                            </div>
                            <p id="warning">Email and/or password is incorrect!</p>
                            <input type="submit" class="button purple" name="" value="Sign In" id="login-purple"/>
                        </form>
                        <hr class="horizontal" id="horizontal">
                        <a href="/signup">
                            <input type="button" class="button black" value="Create account" id="black">
                        </a>
                        <div class="footer-link">
                            <a href="#">Forget you password ?</a>
                        </div>
                    </div>
                    ${footer}
                </div>
            </div>
    ${end}
`;

module.exports = getLoginErr;