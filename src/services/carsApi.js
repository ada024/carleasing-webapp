import firebase from './firebase';

const db = firebase.firestore().collection('cars')

const carsApi = {

    getCars: async () => {
        const documents = await db.get();
        console.log(documents.docs);
        return documents.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    },

    addCar: async (form) => {
        const {id} = await db.add(form)
        return {...form, id}
    },

    deleteCar: async (id) => {
        return await db.doc(id).delete();
    }
}

export default carsApi;
