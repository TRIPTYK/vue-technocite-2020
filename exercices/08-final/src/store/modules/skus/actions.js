export default {
    async getSkus(context){
        const response = await fetch('http://localhost:3000/skus')
        const data = await response.json()
        if(!response.ok){
            throw new Error(data.message || 'Failed to fetch')
        }
        context.commit("setSkus", data)
    }
}