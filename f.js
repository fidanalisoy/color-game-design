var colors = [ "red", "blue", "green", "yellow", "orange", "purple", "brown", "black"  ]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var shuffled_colors = shuffleArray(colors);
console.log(shuffled_colors);

var cards =""
for(var index=0; index < shuffled_colors.length; index++)
    cards += '<div class="card"></div>'
