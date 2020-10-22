import reducer from "../reducers";

describe("todos reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            nextId: 2,
            data: {
                1: {
                    content: "Content 1",
                    completed: false
                }
            }
        });
    });
});
