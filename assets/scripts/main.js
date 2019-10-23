var app = new Vue({
  el: '#app',
  data: {
  	currency: 'тг',
    items:[
    	{
    		title: 'Школьная сумка',
    		description: 'ранец школьная с 3 разделами',
    		selectedType: 0,
    		types:[
    			{
    				description: 'синяя',
    				oldPrice: 10000,
    				price: 4500,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41MSks1Ob1L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'голубая',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41mlde93z6L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'красная',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41TzB8EqZUL._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'male',
    			'female',
    			'bestseller',
    			'new',
    		],
    	},
    	{
    		title: 'Бумага A4 Svetocopy',
    		description: 'Белая бумага размера A4',
    		selectedType: 0,
    		types:[
    			{
    				description: 'пачка - 500 шт',
    				oldPrice: 2000,
    				price: 1800,
    				image: 'https://static.technodom.kz/medias/main-image-1895-Default-WorkingFormat-400Wx400HConversionFormat?context=bWFzdGVyfGltYWdlc3wxMTgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hhMi84Nzk3OTk2Mjg1OTgyLmpwZ3w2MDdkYTQxZjU1ZjlmY2E2YjgwNzZhODA2MzVkNWIxYTI0ZjdkZGVjNmI0YWVjNjE5MTJkMmI5OTQxNGE0Y2Y5',
    			},
    			{
    				description: 'коробка - 2500шт',
    				oldPrice: 10000,
    				price: 8000,
    				image: 'https://st28.stblizko.ru/images/product/260/050/514_original.png',
    			},
    		],
    		tags:[
    			'office',
    			'male',
    			'female',
    		],
    	},
    	{
    		title: 'Ручка Maxwriter',
    		description: 'шариковая ручка maxwriter толщина письма 0.5мм',
    		selectedType: 0,
    		types:[
    			{
    				description: 'цвет стержня синий',
    				price: 100,
    				image: 'https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/d35/faf/638704e657648e010ca2201083d856b0.jpg',
    			},
    			{
    				description: 'цвет стержня черный',
    				price: 100,
    				image: 'https://images.kz.prom.st/105555062_w640_h640_cello-ruchka-sharikovaya.jpg',
    			},
    			{
    				description: 'цвет стержня красный',
    				price: 100,
    				image: 'https://images.kz.prom.st/85684135_w640_h640_ruchka-sharikovaya-cello.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'office',
    			'male',
    			'female',
    			'bestseller',
    		],
    	},
    	{
    		title: 'Школьная сумка',
    		description: 'ранец школьная с 3 разделами',
    		selectedType: 0,
    		types:[
    			{
    				description: 'синяя',
    				oldPrice: 10000,
    				price: 4500,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41MSks1Ob1L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'голубая',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41mlde93z6L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'красная',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41TzB8EqZUL._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'male',
    			'female',
    			'bestseller',
    			'new',
    		],
    	},
    	{
    		title: 'Бумага A4 Svetocopy',
    		description: 'Белая бумага размера A4',
    		selectedType: 0,
    		types:[
    			{
    				description: 'пачка - 500 шт',
    				oldPrice: 2000,
    				price: 1800,
    				image: 'https://static.technodom.kz/medias/main-image-1895-Default-WorkingFormat-400Wx400HConversionFormat?context=bWFzdGVyfGltYWdlc3wxMTgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hhMi84Nzk3OTk2Mjg1OTgyLmpwZ3w2MDdkYTQxZjU1ZjlmY2E2YjgwNzZhODA2MzVkNWIxYTI0ZjdkZGVjNmI0YWVjNjE5MTJkMmI5OTQxNGE0Y2Y5',
    			},
    			{
    				description: 'коробка - 2500шт',
    				oldPrice: 10000,
    				price: 8000,
    				image: 'https://st28.stblizko.ru/images/product/260/050/514_original.png',
    			},
    		],
    		tags:[
    			'office',
    			'male',
    			'female',
    		],
    	},
    	{
    		title: 'Ручка Maxwriter',
    		description: 'шариковая ручка maxwriter толщина письма 0.5мм',
    		selectedType: 0,
    		types:[
    			{
    				description: 'цвет стержня синий',
    				price: 100,
    				image: 'https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/d35/faf/638704e657648e010ca2201083d856b0.jpg',
    			},
    			{
    				description: 'цвет стержня черный',
    				price: 100,
    				image: 'https://images.kz.prom.st/105555062_w640_h640_cello-ruchka-sharikovaya.jpg',
    			},
    			{
    				description: 'цвет стержня красный',
    				price: 100,
    				image: 'https://images.kz.prom.st/85684135_w640_h640_ruchka-sharikovaya-cello.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'office',
    			'male',
    			'female',
    			'bestseller',
    		],
    	},
    	{
    		title: 'Школьная сумка',
    		description: 'ранец школьная с 3 разделами',
    		selectedType: 0,
    		types:[
    			{
    				description: 'синяя',
    				oldPrice: 10000,
    				price: 4500,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41MSks1Ob1L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'голубая',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41mlde93z6L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'красная',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41TzB8EqZUL._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'male',
    			'female',
    			'bestseller',
    			'new',
    		],
    	},
    	{
    		title: 'Бумага A4 Svetocopy',
    		description: 'Белая бумага размера A4',
    		selectedType: 0,
    		types:[
    			{
    				description: 'пачка - 500 шт',
    				oldPrice: 2000,
    				price: 1800,
    				image: 'https://static.technodom.kz/medias/main-image-1895-Default-WorkingFormat-400Wx400HConversionFormat?context=bWFzdGVyfGltYWdlc3wxMTgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hhMi84Nzk3OTk2Mjg1OTgyLmpwZ3w2MDdkYTQxZjU1ZjlmY2E2YjgwNzZhODA2MzVkNWIxYTI0ZjdkZGVjNmI0YWVjNjE5MTJkMmI5OTQxNGE0Y2Y5',
    			},
    			{
    				description: 'коробка - 2500шт',
    				oldPrice: 10000,
    				price: 8000,
    				image: 'https://st28.stblizko.ru/images/product/260/050/514_original.png',
    			},
    		],
    		tags:[
    			'office',
    			'male',
    			'female',
    		],
    	},
    	{
    		title: 'Ручка Maxwriter',
    		description: 'шариковая ручка maxwriter толщина письма 0.5мм',
    		selectedType: 0,
    		types:[
    			{
    				description: 'цвет стержня синий',
    				price: 100,
    				image: 'https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/d35/faf/638704e657648e010ca2201083d856b0.jpg',
    			},
    			{
    				description: 'цвет стержня черный',
    				price: 100,
    				image: 'https://images.kz.prom.st/105555062_w640_h640_cello-ruchka-sharikovaya.jpg',
    			},
    			{
    				description: 'цвет стержня красный',
    				price: 100,
    				image: 'https://images.kz.prom.st/85684135_w640_h640_ruchka-sharikovaya-cello.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'office',
    			'male',
    			'female',
    			'bestseller',
    		],
    	},
    	{
    		title: 'Школьная сумка',
    		description: 'ранец школьная с 3 разделами',
    		selectedType: 0,
    		types:[
    			{
    				description: 'синяя',
    				oldPrice: 10000,
    				price: 4500,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41MSks1Ob1L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'голубая',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41mlde93z6L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'красная',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41TzB8EqZUL._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'male',
    			'female',
    			'bestseller',
    			'new',
    		],
    	},
    	{
    		title: 'Бумага A4 Svetocopy',
    		description: 'Белая бумага размера A4',
    		selectedType: 0,
    		types:[
    			{
    				description: 'пачка - 500 шт',
    				oldPrice: 2000,
    				price: 1800,
    				image: 'https://static.technodom.kz/medias/main-image-1895-Default-WorkingFormat-400Wx400HConversionFormat?context=bWFzdGVyfGltYWdlc3wxMTgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hhMi84Nzk3OTk2Mjg1OTgyLmpwZ3w2MDdkYTQxZjU1ZjlmY2E2YjgwNzZhODA2MzVkNWIxYTI0ZjdkZGVjNmI0YWVjNjE5MTJkMmI5OTQxNGE0Y2Y5',
    			},
    			{
    				description: 'коробка - 2500шт',
    				oldPrice: 10000,
    				price: 8000,
    				image: 'https://st28.stblizko.ru/images/product/260/050/514_original.png',
    			},
    		],
    		tags:[
    			'office',
    			'male',
    			'female',
    		],
    	},
    	{
    		title: 'Ручка Maxwriter',
    		description: 'шариковая ручка maxwriter толщина письма 0.5мм',
    		selectedType: 0,
    		types:[
    			{
    				description: 'цвет стержня синий',
    				price: 100,
    				image: 'https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/d35/faf/638704e657648e010ca2201083d856b0.jpg',
    			},
    			{
    				description: 'цвет стержня черный',
    				price: 100,
    				image: 'https://images.kz.prom.st/105555062_w640_h640_cello-ruchka-sharikovaya.jpg',
    			},
    			{
    				description: 'цвет стержня красный',
    				price: 100,
    				image: 'https://images.kz.prom.st/85684135_w640_h640_ruchka-sharikovaya-cello.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'office',
    			'male',
    			'female',
    			'bestseller',
    		],
    	},
    	{
    		title: 'Школьная сумка',
    		description: 'ранец школьная с 3 разделами',
    		selectedType: 0,
    		types:[
    			{
    				description: 'синяя',
    				oldPrice: 10000,
    				price: 4500,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41MSks1Ob1L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'голубая',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41mlde93z6L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'красная',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41TzB8EqZUL._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'male',
    			'female',
    			'bestseller',
    			'new',
    		],
    	},
    	{
    		title: 'Бумага A4 Svetocopy',
    		description: 'Белая бумага размера A4',
    		selectedType: 0,
    		types:[
    			{
    				description: 'пачка - 500 шт',
    				oldPrice: 2000,
    				price: 1800,
    				image: 'https://static.technodom.kz/medias/main-image-1895-Default-WorkingFormat-400Wx400HConversionFormat?context=bWFzdGVyfGltYWdlc3wxMTgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hhMi84Nzk3OTk2Mjg1OTgyLmpwZ3w2MDdkYTQxZjU1ZjlmY2E2YjgwNzZhODA2MzVkNWIxYTI0ZjdkZGVjNmI0YWVjNjE5MTJkMmI5OTQxNGE0Y2Y5',
    			},
    			{
    				description: 'коробка - 2500шт',
    				oldPrice: 10000,
    				price: 8000,
    				image: 'https://st28.stblizko.ru/images/product/260/050/514_original.png',
    			},
    		],
    		tags:[
    			'office',
    			'male',
    			'female',
    		],
    	},
    	{
    		title: 'Ручка Maxwriter',
    		description: 'шариковая ручка maxwriter толщина письма 0.5мм',
    		selectedType: 0,
    		types:[
    			{
    				description: 'цвет стержня синий',
    				price: 100,
    				image: 'https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/d35/faf/638704e657648e010ca2201083d856b0.jpg',
    			},
    			{
    				description: 'цвет стержня черный',
    				price: 100,
    				image: 'https://images.kz.prom.st/105555062_w640_h640_cello-ruchka-sharikovaya.jpg',
    			},
    			{
    				description: 'цвет стержня красный',
    				price: 100,
    				image: 'https://images.kz.prom.st/85684135_w640_h640_ruchka-sharikovaya-cello.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'office',
    			'male',
    			'female',
    			'bestseller',
    		],
    	},
    	{
    		title: 'Школьная сумка',
    		description: 'ранец школьная с 3 разделами',
    		selectedType: 0,
    		types:[
    			{
    				description: 'синяя',
    				oldPrice: 10000,
    				price: 4500,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41MSks1Ob1L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'голубая',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41mlde93z6L._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    			{
    				description: 'красная',
    				oldPrice: 10000,
    				price: 4300,
    				image: 'https://images-na.ssl-images-amazon.com/images/I/41TzB8EqZUL._SX240_SY220_CR,0,0,240,220_.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'male',
    			'female',
    			'bestseller',
    			'new',
    		],
    	},
    	{
    		title: 'Бумага A4 Svetocopy',
    		description: 'Белая бумага размера A4',
    		selectedType: 0,
    		types:[
    			{
    				description: 'пачка - 500 шт',
    				oldPrice: 2000,
    				price: 1800,
    				image: 'https://static.technodom.kz/medias/main-image-1895-Default-WorkingFormat-400Wx400HConversionFormat?context=bWFzdGVyfGltYWdlc3wxMTgxMTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRlL2hhMi84Nzk3OTk2Mjg1OTgyLmpwZ3w2MDdkYTQxZjU1ZjlmY2E2YjgwNzZhODA2MzVkNWIxYTI0ZjdkZGVjNmI0YWVjNjE5MTJkMmI5OTQxNGE0Y2Y5',
    			},
    			{
    				description: 'коробка - 2500шт',
    				oldPrice: 10000,
    				price: 8000,
    				image: 'https://st28.stblizko.ru/images/product/260/050/514_original.png',
    			},
    		],
    		tags:[
    			'office',
    			'male',
    			'female',
    		],
    	},
    	{
    		title: 'Ручка Maxwriter',
    		description: 'шариковая ручка maxwriter толщина письма 0.5мм',
    		selectedType: 0,
    		types:[
    			{
    				description: 'цвет стержня синий',
    				price: 100,
    				image: 'https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/d35/faf/638704e657648e010ca2201083d856b0.jpg',
    			},
    			{
    				description: 'цвет стержня черный',
    				price: 100,
    				image: 'https://images.kz.prom.st/105555062_w640_h640_cello-ruchka-sharikovaya.jpg',
    			},
    			{
    				description: 'цвет стержня красный',
    				price: 100,
    				image: 'https://images.kz.prom.st/85684135_w640_h640_ruchka-sharikovaya-cello.jpg',
    			},
    		],
    		tags:[
    			'school',
    			'office',
    			'male',
    			'female',
    			'bestseller',
    		],
    	},
    ],
  }
})