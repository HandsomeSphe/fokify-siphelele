import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
import { result } from 'lodash-es';


class ResultsView extends View {
    
    _parentElement = document.querySelector('.results');
    _errorMessage = `Recipe for your query was not found. Please try again.`;
    _message = '';

    
    _generateMarkup(){
        return this._data.map(result => previewView.render(result, false)).join();
    };
};

export default new ResultsView();