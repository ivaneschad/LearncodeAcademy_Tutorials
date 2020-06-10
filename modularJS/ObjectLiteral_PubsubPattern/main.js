var people = (function () {
    var people = ['Ivan', 'Mary'],
        //cache DOM
        $el = $('#peopleModule'),
        $button = $el.find('button'),
        $input = $el.find('input'),
        $ul = $el.find('ul'),
        template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render() {
        $ul.html(Mustache.render(template, { people: people }));    
        events.emit("peopleChanged", people.length);
    };

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    };

    function deletePerson(event) {
        var i = 0,
            $remove = null;

        if (typeof event === "number") {
            i = event;
        } else {
            $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }


        people.splice(i, 1);
        _render();
    };

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();
