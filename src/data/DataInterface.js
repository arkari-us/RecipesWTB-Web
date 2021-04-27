import axios from 'axios';

const DataInterface = {
  async getRecipes() {
    return axios.get('http://localhost:4000/api/recipes', {})
      .then((res) => {
        return res.data;
      })
  }
}

export default DataInterface;