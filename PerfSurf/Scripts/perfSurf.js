(function () {
    var perfHub = $.connection.perfHub;
    $.connection.hub.logging = true;
    $.connection.hub.start();

    perfHub.client.newMessage = function (message) {
        //display to UI using Knockout
        model.addMessage(message);
    };

    perfHub.client.newCounters = function (counters) {
        model.addCounters(counters);
    };

    var ChartEntry = function (name) {
        var self = this;

        self.name = name;
    };
    ChartEntry.prototype

    var Model = function () {
        var self = this;
        self.message = ko.observable("");
        self.messages = ko.observableArray();
        self.counters = ko.observableArray();
    };

    Model.prototype = {
        addCounters: function(updatedCounters) {
            var self = this;

            $.each(updatedCounters, function (index, updateCounter)
            {
                //find an existing entry if present
                var entry = ko.utils.arrayFirst(self.counters(),
                    function (counter)
                    {
                        return counter.name == updateCounter.name;
                    });
                if (!entry) {
                    entry = new ChartEntry(updat.name);
                    self.counters.push(entry);
                }
            });
        },
        sendMessage: function () {
            var self = this;
            perfHub.server.send(self.message());
            self.message("");
        },
        addMessage: function (message) {
            var self = this;
            self.messages.push(message);
        }
    };

})