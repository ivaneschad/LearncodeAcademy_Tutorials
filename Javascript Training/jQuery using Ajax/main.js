$(function () {
    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');

    var orderTemplate = $('#order-template').html();
        

    function addOrder(order) {
        $orders.append(Mustache.render(orderTemplate, order));
    }

    $.ajax({
        type: 'GET',
        url: 'http://rest.learncode.academy/api/ivanes/orders',
        success: function (orderList) {
            $.each(orderList, function (i, order) {
                addOrder(order);
            });
        },
        error: function () {
            alert("error loading orders");
        }
    });

    $('#add-order').on('click', function () {
        var newOrderObject = {
            name: $name.val(),
            drink: $drink.val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://rest.learncode.academy/api/ivanes/orders',
            data: newOrderObject,
            success: function (newOrder) {
                addOrder(newOrder);
            },
            error: function () {
                alert('error saving order');
            }
        })
    });

    $orders.on('click', '.remove', function () {

        var $li = $(this).closest('li');

        $.ajax({
            type: 'DELETE',
            url: 'http://rest.learncode.academy/api/ivanes/orders/' + $(this).attr('data-id'),
            success: function () {
                $li.fadeOut(400, function () {
                    $(this).remove();
                })
            }
        });
    });

    $orders.on('click', '.editOrder', function () {
        var $li = $(this).closest('li');
        $li.find('input.name').val( $li.find('span.name').html());
        $li.find('input.drink').val( $li.find('span.drink').html());
        $li.addClass('edit');
    });

    $orders.on('click', '.cancelEdit', function () {
        $(this).closest('li').removeClass('edit');
    });

    $orders.on('click', '.saveEdit', function () {
        var $li = $(this).closest('li');
        var order = {
            name: $li.find('input.name').val(),
            drink: $li.find('input.drink').val()
        }
        
    $.ajax({
        type: 'PUT',
        url: 'http://rest.learncode.academy/api/ivanes/orders/' + $li.attr('data-id'),
        data: order,
        success: function (newOrder) {
            $li.find('span.name').html(order.name);
            $li.find('span.drink').html(order.drink);
            $li.removeClass('edit');
        },
        error: function () {
            alert('error updating order');
        }
    })
    })
});