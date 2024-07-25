const apiKey = '0287799e***********9e71329f';         //add your api key from spoonacular api😉
export async function fetchRecipes(filter) {  

  const { query, limit } = filter;


  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${limit}&apiKey=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log("This are recipes");
  console.log(data);
  return data?.results;
}

export async function fetchRecipe(id) {
 
  const url = `https://api.spoonacular.com/recipes/${id}/information?Nutrition=false&winePairing=false&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("this is data");
  console.log(data);
  return data;
}

export async function fetchRecipeeasy(filter) {
  const { query, limit } = filter;
  let apiUrl;
  // Construct the appropriate API URL based on the provided filter

    apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&maxReadyTime=20&number=${limit}`;
    console.log("easy duration search-->",query)
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data?.results;
}

export async function fetchRecipeshard(filter) {
  const { query, limit } = filter;
  let  apiUrl;
  // Construct the appropriate API URL based on the provided filter
    apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&minReadyTime=60&number=${limit}`;
    console.log("hard duration search-->",query)
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data?.results;
}

export async function fetchRecipeNutrition(id) {
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`;

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse JSON data from the response
    const data = await response.json();
    
    // Return recipe data
    return data;
  } catch (error) {
    console.error(`Failed to fetch recipe with ID ${id}:`, error);
    return null;
  }
}

export async function similarfetchRecipes(id) {
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`;

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse JSON data from the response
    const data = await response.json();
    
    // Return recipe data
    return data;
  } catch (error) {
    console.error(`Failed to fetch recipe with ID ${id}:`, error);
    return null;
  }
}

