### Bug #1:
`routes/users.js`
- Route was not "waiting" for server response before moving on to next step in the code. Caused test to fail
### Bug #2:
`routes/users.js`
- Query returns all user info, not basic user info only. Should only return `username`, `first_name`, and `last_name`.

### Bug #3:
`routes/users.js`
- Route does not throw 404 if username is not found

### Bug #4:
`__tests__/routes.test.js`
- Test does not check against all allowed-patch fields
### Bug #5:
`routes/users.js`
- User cannot update their own info if they are non-admin
### Bug #6:
`routes/users.js`
- Does not throw a 401 error if disallowed fields or non-existent fields are patched
### Bug #7:
`__tests__/routes.test.js`
- Test does not check if 404 returned if user not found