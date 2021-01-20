const express = require("express"); //вызов модуля express
const app = express(); //присваивание переменной функции express
const bodyParser = require('body-parser');//вызов модуля bodyParser для форм
const cors = require('cors');//вызов модуля cors
let mass = []; //массив данных
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/guide', function (req,res){ // создание элемента справочника
    const news = mass.push(req.body)-1; //добавление в массив данных из формы
    res.send(news.toString());
});
app.put('/guide/:id', function (req,res){ //изменение элемента справочника
    const id = req.params.id; //параметр id
    mass[id] = req.body; //данные из формы
    res.send(id.toString());
      });
app.get('/guide/:id', function (req,res){ //чтение элемента справочника
        const id = req.params.id; //параметр id
        const item = mass[id];
        if (item===null || id>=mass.length) {
            res.sendStatus(404); //ошибка
        } else res.send(mass[id]);
    });
app.get('/guide', function (req,res){ //чтение списков справочника
    res.send(mass);
});
app.delete('/guide/:id', (req,res) =>{ //удаление элемента справочника
    const id = req.params.id;
    mass[id] = null;
    res.send(id.toString());
});
app.listen(3000, function(){  //отслеживание порта 3000
  console.log('Server started')
});
