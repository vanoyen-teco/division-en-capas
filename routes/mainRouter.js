const express = require("express");
const router = express.Router();
const totalCPUs = require("os").cpus().length;

const passport = require('passport');

router.get('/', passport.authenticate('login', { failureRedirect: '/login'}), (req, res) => {
    res.redirect("/dashboard");
})

router.route('/login')
    .get((req, res) => {
        res.render("login", {
            pageTitle: "LogIn",
            signUp: true
        });
    })
    .post(passport.authenticate('login', { failureRedirect: '/login/fail'}), (req, res)=>{
        res.redirect('/dashboard');
    });

router.route('/login/fail')
    .get((req, res) => {
        res.render("login", {
            pageTitle: "LogIn",
            signUp: true,
            error: true
        });
    });

router.route('/signup')
    .get((req, res) => {
        res.render("signup", {
            pageTitle: "Sign Up",
            signUp: true
        });
    })
    .post(passport.authenticate('register', { failureRedirect: '/signup/fail'}),(req, res)=>{
        res.redirect('/dashboard');
    });

router.route('/signup/fail')
    .get((req, res) => {
        res.render("signup", {
            pageTitle: "Sign Up",
            signUp: false,
            fail: true
        });
    });

router.route('/dashboard')
    .get((req, res) => {
        if(req.user){
            res.render("dashboard", {
                pageTitle: "Dashboard",
                userName: req.user.username,
                userEmail: req.user.email,
                loggedIn: true,
                signUp: false
            });
        }else{
            res.redirect('/login');
        }
    });

router.route('/logout')
    .get((req, res) => {
        req.logout((err) => {
            if (err) { res.redirect('/login') }
            else 
            res.render("logout", {
                pageTitle: "Logout",
                signUp: false 
            });
        })    
    });

router.route('/info')
    .get((req, res) => {
        let loggedIn = (req.user)?true:false;
        let signUp = (req.user)?false:true;
        const argumentos = (process.argv)?process.argv.slice(2):false;
        const datos = {
            pageTitle: "Server Info",
            loggedIn: loggedIn,
            signUp: signUp,
            server: { 
                "processId": process.pid,
                "directorio" : __dirname,
                "path": process.cwd(),
                "nodeVersion": process.version,
                "proceso": process.title,
                "os": process.platform,
                "memory": process.memoryUsage().rss,
                "argumentos": argumentos,
                "cpus": totalCPUs
            }
        }
        res.render("info",datos);
    });

module.exports = router;