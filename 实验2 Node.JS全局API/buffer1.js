const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.from("aFjisjdi","base64");
console.log(buf2);
console.log(buf2.toString("utf-8"));
const buf3 = Buffer.from("hello","utf-8");
console.log(buf3);
console.log(buf3.toString("base64"));
