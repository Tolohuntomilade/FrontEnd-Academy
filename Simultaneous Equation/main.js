//selector
const firstx = document.getElementById("firstx");
const firsty = document.getElementById("firsty");
const firstrhs = document.getElementById("firstrhs");
const secondx = document.getElementById("secondx");
const secondy = document.getElementById("secondy");
const secondrhs = document.getElementById("secondrhs");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

//eventlistener

result1.addEventListener('mouseout', () => {
    const firstx = document.getElementById("firstx").value;
    const firsty = document.getElementById("firsty").value;
    const firstrhs = document.getElementById("firstrhs").value;
    const secondx = document.getElementById("secondx").value;
    const secondy = document.getElementById("secondy").value;
    const secondrhs = document.getElementById("secondrhs").value;
    const lhs = math.matrix([[firstx,firsty],[secondx, secondy]])
    const rhs= math.matrix([[firstrhs],[secondrhs]])
    const result= math.multiply((math.inv(lhs)),rhs);
    result1.innerText= result;
})

    