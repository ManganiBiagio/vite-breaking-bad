import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  charactersList: [],
  count: null,
  next:undefined,
  prev:undefined,
  loading: false,
  nameSearched:"",
});

export function fetchCharacters () {

  store.loading = true;

  axios.get("https://swapi.dev/api/people/",{
    params:{
      search:store.nameSearched
    }
  })
    
    .then((resp) => {
      store.charactersList = resp.data.results;
      store.count = resp.data.count;
      store.next=resp.data.next;
      store.prev=resp.data.previous;

      store.loading = false;
      
    })
   
    .catch((error) => {
      
      console.log(error);
      store.loading = false;
    });
}