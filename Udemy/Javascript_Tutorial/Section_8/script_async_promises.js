// PROMISES

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

getID
.then(ID => {
    console.log(ID);
    return getRecipe(ID[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log("Error!!");
});