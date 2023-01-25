Next up let’s try to use some of the postman tests, for example post register, but an error occurs, so now we have to change things up,
Let’s open a new folder in API called DTOs, and inside create a new class named RegisterDto with two public string properties: Username and Password

Then head back to accountcontroller and edit the following in the Register method:

public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto) 
        {
            using var hmac = new HMACSHA512();

            var user = new AppUser {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);

            await _context.SaveChangesAsync();
            
            return user;
        }

Next add another method after register:

private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

And now we use this method at the start of the register method:

if(await UserExists(registerDto.Username)) return BadRequest("Username is taken");

This basically works but its not perfect so next we’ll add validation
