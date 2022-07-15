/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {

    // FIXES Bug #8
    if (!res.locals.user) return next({ status: 401, message: 'Unauthorized' });
    return next();
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (!res.locals.user || !res.locals.user.admin) return next({ status: 401, message: 'Unauthorized' });
    return next()
  } catch (err) {
    return next(err);
  }
}

// FIXES Bug #5
/** Authorization Middleware: Requires user is logged in and is matching user or is staff. */

function requireMatchingUserOrAdmin(req, res, next) {
  // FIXES Bug #8
  let reqUser = req.params.username
  let currUser = res.locals.user
  try {
    if (!(currUser && (currUser.admin || reqUser == currUser.username))) return next({ status: 401, message: 'Unauthorized' });
    return next();
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
  try {
    const authHeader = req.headers && req.headers.authorization;
      
    // FIXES Bug #8
    if (authHeader) {
      const token = authHeader.replace(/^[Bb]earer /, "").trim();
      res.locals.user = jwt.verify(token, SECRET_KEY);
    }

    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end

module.exports = {
  requireLogin,
  requireAdmin,
  requireMatchingUserOrAdmin,
  authUser
};
