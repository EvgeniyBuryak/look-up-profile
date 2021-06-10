# LookUpProfile

Поиск профиля
У нас есть массив объектов, представляющих разных людей в наших списках контактов.

Для вас заранее написана lookUpProfileфункция, которая принимает nameи свойство ( prop) в качестве аргументов.

Функция должна проверять, nameявляется ли это фактическим контактом, firstNameи данное свойство ( prop) является свойством этого контакта.

Если оба верны, то верните «значение» этого свойства.

Если nameне соответствует ни одному контакту, вернуть строку No such contact.

Если propне соответствует каким-либо действительным свойствам найденного контакта, nameверните строку No such property.

lookUpProfile("Kristian", "lastName") должен вернуть строку Vos

Passed
lookUpProfile("Sherlock", "likes") должен вернуться ["Intriguing Cases", "Violin"]

Passed
lookUpProfile("Harry", "likes") должен вернуть массив

Passed
lookUpProfile("Bob", "number") должен вернуть строку No such contact

Passed
lookUpProfile("Bob", "potato") должен вернуть строку No such contact

Passed
lookUpProfile("Akira", "address") должен вернуть строку No such property