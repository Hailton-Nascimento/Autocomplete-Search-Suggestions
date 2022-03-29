const $input = document.querySelector("input");
const $listSuggestions = document.querySelector('.autocom-box');
const $searchWrapper = document.querySelector('.search-input');
const icon = document.querySelector('.icon');


const filteredSuggestions = ({ target: { value } }) => {
    console.log(value);
    if (!value) {
        $searchWrapper.classList.remove('active');
        return;
    }
    value = value.toLowerCase();
    let resultFiltered = [];
    resultFiltered = suggestions.filter((item) => {
        item = item.toLowerCase();
        return item.startsWith(value);
    });
    insertSuggest(resultFiltered);
};

const select = ({ target: { textContent } }) => {
    $input.value = textContent;
    $searchWrapper.classList.remove('active');

    icon.onclick = () => {
        const webLink = `https://www.google.com/search?q=${textContent}`;
        const linkTag = $searchWrapper.querySelector("a");
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    $searchWrapper.classList.remove("active");
}

const createLiElemento = (li) => {
    const $li = document.createElement('li');
    $li.innerHTML = li;
    $li.addEventListener('click', select);
    return $li;
}

const insertSuggest = suggestions => {
    $listSuggestions.innerHTML = '';
    $searchWrapper.classList.add('active');

    const isEmpty = suggestions.length === 0;

    if (isEmpty) {
        const { target: { value } } = event
        const $li = createLiElemento(value);
        $listSuggestions.append($li);
        return;
    }
    for (suggestion of suggestions) {
        const $li = createLiElemento(suggestion);
        $listSuggestions.append($li);
    }
}

$input.addEventListener('keyup', filteredSuggestions);