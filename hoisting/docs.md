# Hosting nó là việc đưa phần khai báo lên trên đầu phạm vi

# Hosting with "var" and "function declaration"
- Xét ví dụ sau "var"
console.log(age); //undefined
console.log(fullName); //ReferenceError: fullName is not defined
// definde
var age = 16;

- Xét ví dụ sau "function"
console.log(sum(2, 3)); //6

function sum(2, 3) {
    return 2 + 3;
}

# Hosting with "let" and "const"

- Xét ví dụ sau "let"
{
    console.log(fullName); //ReferenceError: Cannot access 'fullName' before initialization
    let fullName = 'Nguyen Van A';
}

* Lưu ý: Đối với "let" và "const" khi được hosted sẽ được gán giá trị và đưa vào "Temporal Dead Zone" (Vùng tạm thời không truy cập được)

# Tại sao lại dùng hosting
let fullName = 'Nguyen Van A';
{
    {
        {
            let fullName = 'Nguyen Van B';
            {
                {
                    console.log(fullName);
                    let fullName = 'Nguyen Van C';
                }
            }
        }
    }
}
