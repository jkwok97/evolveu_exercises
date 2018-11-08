// ASYNCHRONOUS JAVASCRIPT AND CALLBACKS

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523,883,432,974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {title: 'Fresh Tomato Pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe2)
            }, 1500, recipe.publisher);

        }, 1000, recipeID[2]);
        
    }, 1500);

}
getRecipe();