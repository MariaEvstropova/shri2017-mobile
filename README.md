## Приложение FEEDME

У вас в холодильнике есть продукты, но вы не знаете что приготовить?
Все рецепты надоели и хочется чего-то нового?
FEEDME поможет вам найти *тот самый* рецепт!

### Пользоваться FEEDME просто:

1. Установите приложение на телефон (к сожалению сейчас поддерживаются только версии Android > 5.0)
2. После запуска приложения вы попадёте на главный экран.
    * Добавляйте продукты, пользуясь текстовым вводом ![скриншот экран 1](http://res.cloudinary.com/mariaevstropova/image/upload/v1501006071/S70725-205535_mgcdxe.jpg)
    или
    * Добавляйте продукты, просто ***сканируя штрихкод*** на упаковке!
3. После добавления всех желаемых продуктов, запустите поиск ![скриншот экран 2](http://res.cloudinary.com/mariaevstropova/image/upload/v1501006071/S70725-205553_ubf8vs.jpg).
4. Выберете понравившийся рецепт ![скриншот экран 3](http://res.cloudinary.com/mariaevstropova/image/upload/v1501006071/S70725-205607_krggl2.jpg).
5. Смотрите детальную информацию и рецепте, а так же ***поделитесь*** рецептом с кем угодно!

### Информация об использованных технологиях

##### Использованные плагины

* [cordova-plugin-dialogs](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-dialogs/) - для вывода пользователю сообщений об ошибках
* [cordova-plugin-splashscreen](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/) - для того, чтобы пользователь видел заставку во время загрузки приложения, но не тратил свое время впустую из-за заданного в config.xml времени показа (см. [splash-screens-the-right-way](https://www.bignerdranch.com/blog/splash-screens-the-right-way/))
* [barcodescanner](http://plugins.telerik.com/cordova/plugin/barcodescanner) - для считывания и разпознования штрихкодов с упаковок
* [socialsharing](http://plugins.telerik.com/cordova/plugin/socialsharing) - для того чтобы поделиться крутым рецептом со всем миром

#### Фронт-енд стек

* React - для формирования вёрстки приложения
* react-router - для навигации между экранами
* material-ui - для того, чтобы приложение имело *квази-нативный* внешний вид
* redux - чтобы хранить состояние приложения
* styled-components - потому что все о них говорят, а я ещё не пробовала