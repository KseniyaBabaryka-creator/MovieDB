const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function(){
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		};
	},
	rememberMyFilms: function(){
		for (let i = 0; i < 2; i++){
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
		
			if (a !== null && b !== null && a != '' && b != '' && a.length < 50){
				personalMovieDB.movies[a] = b;
			} else {
				i--;
			}
				
		};
	},
	toggleVisibleMyDB: function(){
		if (personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		};
	},
	detectPersonalLevel: function(){
		if (personalMovieDB.count < 10){
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30){
			console.log('Вы киноман');
		} else console.log('Произошла ошибка');
	},
	showMyDB: function(){
		if (!hidden){
			console.log(personalMovieDB);
		};
	},
	writeYOurGenres: function(){
		for (let i = 0; i < 3; i++){
			let genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
			if (genre === '' || genre == null){
				console.log('Вы ввели некорректные данные');
				i--;
			};
			personalMovieDB.genres.push(genre);
		};

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		})
	}
};


