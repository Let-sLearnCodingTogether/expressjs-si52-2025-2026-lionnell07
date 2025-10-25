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



export const privateProfile = async (req, res) => {
    try {
        const user = req.user;

        res.status(200).json({
            message: "private profile berhasil diakses",
            data: user,
        });
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};