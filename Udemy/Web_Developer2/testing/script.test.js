const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
];

describe('googleSearch', () => {
    it('is a silly test', () => {
        console.log(googleSearch);
        expect('hello').toBe('hello');
        googleSearch('testtest', dbMock);
    })

    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})