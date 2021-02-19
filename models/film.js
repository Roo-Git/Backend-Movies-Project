class Film {

    constructor(id, title, year, description, image, genre, adult) {
        this.title = title,
        this.id = id,
        this.year = year,
        this.description = description,
        this.image = image,
        this.genre = genre,
        this.adult = adult
    }

    async takeMovies () {

    }
}

module.exports = Film;