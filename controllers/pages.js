const pages = {
    home:(req, res) => {
        let datos = {nombre:"adrian"}
        res.status(200).render('home', datos)
    },
    about:(req, res) => {
        res.status(200).render('about')
    },
    contact:(req, res) => {
        res.status(200).render('contact')
    },
    mission:(req, res) => {
        res.status(200).render('mission')
    },
    location:(req, res) => {
        res.status(200).render('location')
    },
}

module.exports = pages