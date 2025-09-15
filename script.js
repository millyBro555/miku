const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const inp3 = document.getElementById('inp3')
const btn = document.getElementById('btn')
const vyv = document.getElementById('vyv')

function tringle() {
    let a = Number(inp1.value)
    let b = Number(inp2.value)
    let c = Number(inp3.value)

    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && a + c > b && b + c > a) {
            if (a === b && b === c) {
                vyv.textContent = 'Треугольник равносторонний';
            } else if (a === b || a === c || b === c) {
                vyv.textContent = 'Треугольник равнобедренный';
            } else {
                vyv.textContent = 'Треугольник разносторонний';
            }
        } else {
            vyv.textContent = 'Треугольник не существует';
        }
    } else {
        vyv.textContent = 'Введите положительные числа';
    }
}

btn.addEventListener('click', tringle)