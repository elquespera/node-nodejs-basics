export const parseArgs = () => {
    console.log(process.argv.slice(2).
                map((arg, i) => i % 2 ? arg : arg.slice(2)).
                reduce((t, arg, i) => t + arg + (i % 2 ? ', ' : ' is '), '').
                slice(0, -2));
};