let input = document.querySelector('input')
let btn = document.querySelector('button')
let wrapper = document.querySelector('.wrapper')

let users = [
    {
        userName: input.value,
    }
]

const ReadFunction = () => {
    wrapper.innerHTML = ''
    users.forEach((v) => {
        let div = document.createElement('div')
        div.innerHTML = `<div class="rounded-[50%] "></div> <p>${v.userName}</p>`
        wrapper.appendChild(div)
    })
}


ReadFunction()

btn.addEventListener('click',
    AddUserFunction = () => {
        let obj = {
            id: users.length + 1,
            userName: input.value
        }

        users.push(obj)
        localStorage.setItem('users', JSON.stringify(users))
        ReadFunction()
        input.value = null
    }
)


