Now let’s add a login endpoint starting with a new DTO named LoginDTO with two public required properties : username and password

Then make a Login method in accountcontroller with the following code:

[HttpPost("login")]
public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
        {
            // get user from db
            var user = await this._context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());
            if(user == null) return Unauthorized("Invalid username or password");  

            //check password using hmac to do the reverse of what we did to register
            //calculate the hash using salt and the given password

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if(computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid username or password");
            }
            return user;
        }

Now we can send a POST login, after some tests we should clean the database with the command:
Dotnet ef database drop 
And create it again with the command:
Dotnet ef database update
