import express from 'express'
import mongoose from 'mongoose'
import { routes } from './src/publisher/routes'

class App {
    public express: express.Application

    public constructor(){
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware(): void {
        this.express.use(express.json())
    }

    public async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/esoft7s-publisher');
            console.log('Conectou sa pora')
        } catch(err) {
            console.error('Deu ruim sa mer**')
        }
    }

    public routes(): void {
        this.express.use(routes)
    }
}

export default new App().express