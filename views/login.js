const getLogin = (begin, between, header, footer, end) => `
    ${begin}
            <link rel="stylesheet" href="css/signup-login.css">
            <title>Login</title>
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
                            <input type="submit" class="button purple" name="" value="Sign In"/>
                        </form>
                        <hr>
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

module.exports = getLogin;