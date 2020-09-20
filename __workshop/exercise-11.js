function exercise11() {
    // Exercise 11
    //
    // Write a program that creates a string that represents an 8×8 grid,
    // using newline characters to separate lines. At each position of the grid
    // there is either an "_" or a "#" character. The characters should form a chessboard.
    // #_#_#_#_
    // _#_#_#_#
    // #_#_#_#_
    // _#_#_#_#
    // #_#_#_#_
    // _#_#_#_#
    // #_#_#_#_
    // _#_#_#_#
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------
    let str1 = "",
        str2 = "";


    for (let i = 0; i < 8; i++) {
        (i % 2 == 0) ? str1 += "#": str1 += "_";
    }
    for (let i = 0; i < 8; i++) {
        (i % 2 != 0) ? str2 += "#": str2 += "_";
    }
    for (let i = 0; i < 4; i++) {
        console.log(str1, str2)
    }




    // -----------------------------------------------------------------
    // Write code between the lines (above)
    //
    //
    //
    //
    //
    //
}
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11
exercise11()

module.exports = exercise11;