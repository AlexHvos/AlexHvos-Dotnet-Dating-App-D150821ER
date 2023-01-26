Next let's change TokenService so that it actually creates JWTs, first open the nuget gallery and install System.IdentityModel.Token.Jwt

Now add the following code the TokenService class:

private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        public string CreateToken(AppUser user)
        {
            // adding claims to token:
            var claims = new List<Claim> {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            // adding credentials to token with the key and an algorithm
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            // describing what the token is going to look like
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            // the token handler will create the token using the descriptor
            var tokenHandler = new JwtSecurityTokenHandler();

            // create token
            var token = tokenHandler.CreateToken(tokenDescriptor);

            //return token
            return tokenHandler.WriteToken(token);