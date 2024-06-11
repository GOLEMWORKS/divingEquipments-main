initSqlJs({ locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/${filename}` })
    .then(SQL => {
        let db = new SQL.Database(); // Создаём виртуальную базу данных
        db.exec("CREATE TABLE test (Name, Path); INSERT INTO test VALUES ('Mask', 'Mask.jpg'), ('Snorkel','Snorkel.jpg');"); // Заполняем таблицу тестовыми данными
        let stmt = db.prepare("SELECT * FROM test"); 
        
        let parent = document.querySelector('#parent');

        while (stmt.step()){
            let p = document.createElement('p');
            p.textContent = stmt.get(); 
            parent.appendChild(p);
        } 
        stmt.free(); // Освобождаем ресурсы после выполнения запроса
    });
