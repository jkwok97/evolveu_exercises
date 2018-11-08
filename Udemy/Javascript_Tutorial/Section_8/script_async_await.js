// ASYNC / AWAIT // ES8

const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523,883,432,974]); //Reject = Catch, Resolve = Then
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh Tomato Pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub} : ${recipe.title}`);
        },1500, publisher);
    });
};

async function getRecipeAW() {
    const ID = await getID;
    console.log(ID);
    const recipe = await getRecipe(ID[2]);
    console.log(recipe);
    const related = await getRelated('Jonas');
    console.log(related);

    return recipe;
}

getRecipeAW().then(result => console.log(`${result} is the best ever`));