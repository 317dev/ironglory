# README


USERS ROUTES

GET /api/users/new
  I don't think you'll actually need this route...

POST /api/users/
  - required params: first_name, last_name, email, password, username
  - email and username MUST be unique
  - will return token
  - error will return error message and status 400

SESSIONS ROUTES (LOGIN)

POST /api/login
  - required params: username, password
  - will return token
  - error will return 'Incorrect credentials' error message and status 401

PATCHES ROUTES (inventory/products)

GET /api/patches
  - will return hash of all patches
    - this includes all patch object information: id, name, description, sku, price, quantity
    - I will work with you both to adjust this information based on what you think you'll need
    - additional info I can supply you with: featured item, limited edition item, year, category, photo

GET /api/patches/:id
  - required params: id
  - will return a single patch object by id
  - returns all the information above, and we can adjust this to meet our needs

ORDERS ROUTES (requires a user to be logged in)

GET /api/users/:id/orders
  - required params: token
  - returns a list of all the user's orders (order history)
    - this includes order id, user id associated with order, whether it has been processed
    - we can adjust this to display the patches in the order, etc.
  - error will return "You have no orders" if orders is a blank array

GET /api/users/:id/orders/:id
  - required params: token (from user), id (from order)
  - returns a single order with the information above (again, we can tailor this output)
  - error will return "That order does not exist"
