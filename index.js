/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index}は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
    if (name === "じゃけぇ") {
        return name;
    } else {
        return `${name}さん`;
    }
});
console.log(newNameArr);
