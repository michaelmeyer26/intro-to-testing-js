// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
       expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed with "Jane"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when run as sayHello("Alex")', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when called with 'Pat'", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World! when run without arguments', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when run with true as the value', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when run with a falsy value', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when the value is five', function () {
        expect(isFive(5)).toBe(true);
    });
});