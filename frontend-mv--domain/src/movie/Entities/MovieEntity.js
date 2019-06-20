export default class MovieEntity {
    constructor({ id, title, image, description}) {
        this._id = id
        this._title = title
        this._image = image
        this._description = description
    }

    toJSON() {
        return {
            id: this._id,
            title: this._title,
            image : this._image,
            description: this._description 
        }
    }

}