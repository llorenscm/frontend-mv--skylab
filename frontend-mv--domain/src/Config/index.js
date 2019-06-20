export default class Config{
    constructor(){
        this._config = {
            API_HOST: 'https://api.themoviedb.org/3',
            API_KEY: 'c8d4a3e8ed776dd6b9cd963b64c11df3'
        }
    }
    get(key){
        return this._config[key]
    }
}


