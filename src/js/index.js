import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** Global State of our App */
/*
 * -Search Object
 * -Current Recipe Object
 * -Shopping List Object
 * -Liked Recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); 

    if (query) {

        // New search object and add it to state
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // Search for recipes
        await state.search.getResults();

        // Render results on UI
        searchView.renderResults(state.search.results);

    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});