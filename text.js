let isti = prompt('Istifadeci adinizi yazin!');
let soyuq = prompt('Sifrenizi yazin!');

switch (true) {
    case isti == 'zekeriyya12' && soyuq == 'Zekeriyya12!@':
        netice = 'Tekrar xos gelmisiniz, zekeriyya12!'
        break;

    default:
    netice = 'Istifadeci adi veya Sifre yanlisdir!'
        break;
}
document.getElementById('zekrot').innerHTML = netice