const getSignup = (begin, between, header, footer, end) => `
    ${begin}
            <link rel="stylesheet" href="css/signup-login.css">
            <title>Sign up</title>
        ${between}
            <div class="main">
                <div class="form-container">
                    ${header}
                    <div class="form">
                        <h3 class="form-title">Sign up</h3>
                        <form action="">
                            <div class="input-group">
                                <label for="mail">Email</label>
                                <input type="email" name="email" id="mail" placeholder="Email" required/>
                            </div>
                            <div class="input-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Name" required/>
                            </div>
                            <div class="input-group">
                                <label for="pass">Password</label>
                                <input type="password" name="password" id="pass" placeholder="Set your password" required/> 
                            </div>
                            <div class="input-group">
                                <label for="pass-conf">Confirm password</label>
                                <input type="password" name="password-confirm" id="pass-conf" placeholder="Type your password again" required/> 
                            </div>
                            <input type="submit" class="button purple" name="" value="Get started" id="button"/>
                        </form>
                        <div class="footer-link">
                            <p>Already have an account? <a href="/login">Sign in</a>
                            </p>
                        </div>
                    </div>
                    <!-- something -->
                    ${footer}
                </div>
            </div>
      ${end}
`;

module.exports = getSignup;