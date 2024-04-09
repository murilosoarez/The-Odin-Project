let mark = [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(`[[${mark[0]}], [${mark[1]}], [${mark[2]}], \n[${mark[3]}], [${mark[4]}], [${mark[5]}],\n[${mark[6]}], [${mark[7]}], [${mark[8]}]]`)

let prompt = 2

for (i=0; i < mark.length; i++) {
    if (mark[i] == prompt) {
        mark[i] = 'X'
    }
}

prompt = 3

for (i=0; i < mark.length; i++) {
    if (mark[i] == prompt) {
        mark[i] = 'X'
    }
}

console.log(`[[${mark[0]}], [${mark[1]}], [${mark[2]}], \n[${mark[3]}], [${mark[4]}], [${mark[5]}],\n[${mark[6]}], [${mark[7]}], [${mark[8]}]]`)
