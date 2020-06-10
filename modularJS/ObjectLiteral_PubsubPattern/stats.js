var stats = (function () {
    var people = 0,
        $stats = $('#statsModule'),
        template = $stats.find('#stats-template').html();

    //bind events
    events.on("peopleChanged", setPeople);
    __render();

    function __render() {
        $('h2').append(Mustache.render(template, {people: people}));
    };

    function setPeople(newPeople) {
        people = newPeople;
        __render();
    };

    function destroy() {
        $stats.remove();
        events.off('peopleChanged', setPeople);
    };

    return {
        destroy: destroy
    }

})();