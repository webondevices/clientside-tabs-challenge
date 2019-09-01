export const getAPIURL = section => {
  return `http://content.guardianapis.com/${section}?api-key=test`;
};

export const loadArticlesFromSection = section => {
  return fetch(getAPIURL(section))
    .then(response => response.json())
    .then(content => content.response.results);
};
