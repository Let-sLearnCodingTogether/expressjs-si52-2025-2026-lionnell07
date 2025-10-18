export const publicprofile = (req, res) => {
    const username = req.params.username 
    res.render("public-profile", {
        title : username,
        username: username,
        bio: "Sandy chips"
    })  
}
export const epep = (req, res) => {
    const nama = req.params.nama ?? "tanpa title"
    res.render("epep", {
        nama : `${nama}`
    })  
}