window.onload = () => {
    const table = document.getElementById("table");

    const templateString =
        `<tr>
    <td>%a</td>
    <td>%b</td>
    <td>%c</td>
    <td>%d</td>
</tr>`

    function textToLink(string) {
        return string.replace(/\[\[\[(.*?)]]]/g, (match, content) => {
            const [link, text = link] = content.split("|");
            return `<a href='https://scpfoundation.net/${link}' target="_blank">${text}</a>`;
        });
    }

    function textToBoldEmphasis(string) {
        return string.replace(/\*\*\*(.*?)\*\*\*/g, (match, content) => {
            return `<strong><em>${content}</em></strong>`;
        });
    }


    function textToBold(string) {
        return string.replace(/\*\*(.*?)\*\*/g, (match, content) => {
            return `<strong>${content}</strong>`;
        });
    }

    function textToEmphasis(string) {
        return string.replace(/\*(.*?)\*/g, (match, content) => {
            return `<em>${content}</em>`;
        });
    }

    /**
     * @typedef StoryObj
     * @property {string} year - год, в который произошло событие
     * @property {string} [mem] - сюжет Отдела меметики
     * @property {string} [gen] - общий сюжет, не привязанный к отдельному отделу
     * @property {string} [epi] - сюжет Отдела эпистемических исследований
     */

    /**
     * @param {StoryObj} storyObj
     */
    function makeStory(storyObj) {
        let t = templateString;
        t = t.replace("%a", storyObj.year);
        t = t.replace("%b", storyObj.epi ?? "");
        t = t.replace("%c", storyObj.gen ?? "");
        t = t.replace("%d", storyObj.mem ?? "");
        t = textToLink(t);
        t = textToBoldEmphasis(t);
        t = textToBold(t);
        t = textToEmphasis(t);
        table.insertAdjacentHTML("beforeend", t);
    }

    makeStory({
        year: "1937",
        gen: "Первое зафиксированное событие типа \"ИНФОШТОРМ\".",
    });
    makeStory({
        year: "1938",
        gen: "Инициация проекта «ОПИУМ» — проекта борьбы с принципиально новым типом аномалий — инфоугрозами.",
    });
    makeStory({
        year: "1970",
        gen: "ОПИУМ упразднён, официальная причина — перенаправление ресурсов на более конкретные направления. Преемниками стали новосозданные Отдел меметики и Отдел эпистемических исследований, а также независимо друг от друга Отдел противоконцепций и Отдел антимеметики.",
        mem: "Создание Отдела меметики.",
        epi: "Создание Отдела эпистемических исследований.",
    });
    makeStory({
        year: "1976",
        mem: "Первое чётко описанное и теоретически обоснованное событие типа \"ИНФОШТОРМ\".",
        gen: "Церковь Максвеллизма создаёт первый в мире полноценный искусственный интеллект — *Фрагмент_IX*.",
    });
    makeStory({
        year: "1977",
        mem: "Создание амфизиаков — препаратов, способных временно повысить ИКС человека. Прорыв в борьбе с меметическими угрозами.",
    });
    makeStory({
        year: "1978",
        gen: "ИТ создаёт первый полноценный ИИ Фонда — *«8-Шар»*.",
    });
    makeStory({
        year: "1979",
        mem: "Создание АФИРа — технологии для генерации программируемых меметических агентов.",
    });
    makeStory({
        year: "1980",
        mem: "Образование Подразделения мемогенеза — подотдела меметики, специализирующегося на разработке и применении меметических агентов на пользу Организации.",
    });
    makeStory({
        year: "1985",
        epi: "Проведено совместное с ОПИИ исследование, позволившее утверждать о том, что разум ИИ схож с человеческим. Прорыв эпистемических исследований.",
    });
    makeStory({
        year: "1987",
        mem: "Возникновение копии луны, распространившей мемагент об опасности космического пространства. См. [[[SCP-1455-RU]]].",
    });
    makeStory({
        year: "2020",
        epi: "Печальный конец проекта *«ФЛАММАРИОН»*. Последний известный «ИНФОШТОРМ». Образование зоны отчуждения на Дальнем Востоке.",
    });
}
