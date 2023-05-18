import {Schema, model} from 'mongoose'

const publisherSchema = new Schema ({
    name: String,
    cnpj: String,
    address: String
})

export default model ('Publisher', publisherSchema)