const BACKEND_HOST = "https://localhost:5000";

const get_url = (path) => {
    if (path.startsWith("/")) {
        return BACKEND_HOST + path;
    }
    return BACKEND_HOST + "/" + path;
};

const do_login = () => {
    fetch(get_url("/login"))
        .then(console.log(get_url("/login" + " called..")))
        .catch((err) => {
            console.error(JSON.stringify(err));
            window.alert("Login failed, check console for errors");
        });
};

export default do_login