const BACKEND_HOST = "http://localhost:5000";

const get_url = (path) => {
    if (path.startsWith("/")) {
        return BACKEND_HOST + path;
    }
    return BACKEND_HOST + "/" + path;
};

const do_login = () => {
    fetch(get_url("/login"))
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw Error(res.text())
            }
        })
        .then(res => {
            console.table(res)
            console.log("redirecting to : " + res.redirect)
            window.location.replace(res.redirect)
        })
        .catch((err) => {
            console.error(JSON.stringify(err));
            window.alert("Login failed, check console for errors");
        });
};

const get_data = () => {
    fetch(get_url("/user"))
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw Error(res.text())
            }
        })
        .then(res => {
            console.table(res)
            console.log("redirecting to : " + res.redirect)
            window.location.replace(res.redirect)
        })
        .catch((err) => {
            console.error(JSON.stringify(err));
            window.alert("Login failed, check console for errors");
        });
};

const call_logout = () => {
    fetch(get_url("/logout"))
        .then(window.alert("Logged out Sucessfully"))
        .catch((err) => {
            console.error(JSON.stringify(err));
            window.alert("Login failed, check console for errors");
        });
};

export default do_login