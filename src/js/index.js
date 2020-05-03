import Search from './models/Search'

/** Global State of our App */
/*
 * -Search Object
 * -Current Recipe Object
 * -Shopping List Object
 * -Liked Recipes
 */
const state = {}

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza'; // TODO

    if (query) {

        // New search object and add it to state
        state.search = new Search(query);

        // Prepare UI for results


        // Search for recipes
        await state.search.getResults();

        // Render results on UI
        console.log(state.search.results)

    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});