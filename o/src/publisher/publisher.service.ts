import PublisherModel from "./publisher.schema";

export class PublisherService {

    async create(publisher: any) {
        const createdPublisher = await PublisherModel.create(publisher)
        
        return createdPublisher
    }

    async findById(id: any) {
        const findedPublisher = await PublisherModel.find(id)
    
        return findedPublisher
    }

    async delete(id: any) {
        await PublisherModel.findById(id)
        return "Foi de base"
    }
}