function getDateFormated() {
    const date = new Date();
    const day = date.getDay();
    let weekDay = date.getDay();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    const time = `${date.getHours()}:${date.getMinutes()}`;

    switch (weekDay) {
        case 1:
            weekDay = "Segunda-Feira";
            break;
        case 2:
            weekDay = "Terça-Feira";
            break;
        case 3:
            weekDay = "Quarta-Feira";
            break;
        case 4:
            weekDay = "Quinta-Feira";
            break;
        case 5:
            weekDay = "Sexta-Feira";
            break;
        case 6:
            weekDay = "Sábado";
            break;
        case 7:
            weekDay = "Domingo";
            break;
    };

    switch (month) {
        case 1:
            month = "Janeiro";
            break;
        case 2:
            month = "Fevereiro";
            break;
        case 3:
            month = "Março";
            break;
        case 4:
            month = "Abril";
            break;
        case 5:
            month = "Maio";
            break;
        case 6:
            month = "Junho";
            break;
        case 7:
            month = "Julho";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Setembro";
            break;
        case 10:
            month = "Outubro";
            break;
        case 11:
            month = "Novembro";
            break;
        case 12:
            month = "Dezembro";
            break;
    };

    const finalDate = `${weekDay}, ${day} de ${month} de ${year} \n${time}`;
    return finalDate;
};

console.log(getDateFormated());
