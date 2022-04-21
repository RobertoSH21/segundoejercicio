const Spiderman = require('./../app/Spiderman')

describe("Unit Tests for Spiderman class", () => {
    test('1) create an spiderman object', () => {
      const AndrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
      
      expect(AndrewGarfield.name).toBe("Spiderman Sony")
      expect(AndrewGarfield.age).toBe(31)
      expect(AndrewGarfield.actor).toBe("Andrew Garfield")
      expect(AndrewGarfield.movies).toBe(2)
      expect(AndrewGarfield.studio).toBe("Sony")
    });

    test('2) Use the method getInfo()', () => {
        const TomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
  })