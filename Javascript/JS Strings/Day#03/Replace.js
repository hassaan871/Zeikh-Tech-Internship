const text = "I think ferarri is faster than the lamborgini";

const newText = text.replace('ferarri', 'BUGHATTI');

console.log(text);
console.log(newText);

const newestText = text.replace('ferarri', `
    ⢀⣀⣠⣤⣤⣶⣶⣤⣤⣄⣀⡀⠀⠀⠀⠀
⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠿⠿⠛⠛⠛⠉⠉⠉⠉⠛⠛⠛⠿⢿⣿⣿⣿
⣿⣿⡇⠀⠀⠀⠀⠀⣤⣴⣷⡄⠀⠀⠀⠀⠀⢸⣿⣿
⣿⣿⡇⠀⠀⠀⢀⠴⡄⣸⣿⡏⠀⠀⠀⠀⠀⢸⣿⣿
⢹⣿⣷⠀⠀⠀⠁⡤⢶⣿⣿⣁⠀⢠⠀⠀⠀⣿⣿⡏
⠈⢿⣿⣇⠀⠀⠀⢳⠀⢙⣿⣿⣷⠾⠀⠀⣸⣿⡿⠀
⠀⠘⣿⣿⣆⠀⠀⠠⠤⠾⢹⡏⠀⠀⠀⣰⣿⣿⠃⠀
⠀⠀⠘⢿⣿⣷⡀⠀⠀⠰⠟⠀⠀⢀⣾⣿⡿⠃⠀⠀
⠀⠀⠀⠈⠻⣿⣿⣦⡀⠀⠀⢀⣴⣿⣿⠟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⣿⣿⣷⣾⣿⣿⠟⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀`);

console.log(newestText);
