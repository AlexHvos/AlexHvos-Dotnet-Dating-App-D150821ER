Inside the controllers folder create new api controller named userscontroller
Go to UsersController class and add the following:
private readonly DataContext _context;
        public UsersController(DataContext context) {
            _context = context;


        }
        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            var users = _context.Users.ToList();
            return users;
        }


        [HttpGet("{id}")]


        public ActionResult<AppUser> GetUser(int id)
        {
            var user = _context.Users.Find(id);
            return user;
        }

Now when you use the api it can show the list of users or a specific user by adding api/users or api/users/’id number’ in the address of api page
