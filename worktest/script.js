//1 slider
$( function() {
    var select = $( "#amount" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
        min: 1000,
        max: 3000000,
        range: "min",
        value: select[ 0 ].value ,
        rest: false,
        slide: function( event, ui ) {
            select[ 0 ].value = ui.value;
        },
    });
    select.on( "change", function() {
        slider.slider( "value", this.value );
    });
} );

//2 slider
$( function() {
    var select = $( "#addition" );
    var slider = $( "<div id='slider2'></div>" ).insertAfter( select ).slider({
        min: 1000,
        max: 3000000,
        range: "min",
        value: select[ 0 ].value ,
        slide: function( event, ui ) {
            select[ 0 ].value = ui.value;
        }
    });
    select.on( "change", function() {
        slider.slider( "value", this.value );
    });
} );

//datepicker
$( function() {
    $( "#date").datepicker({
        dateFormat : "dd-mm-yy",
        onSelect: function(dateText,event, ui) {
            var startDate = $('#date').datepicker('getDate');
            var selDay = startDate.getTime();
          //  alert(selDay);
            var nextmonth = startDate.setMonth(startDate.getMonth()+1);
            var daysn = (nextmonth-selDay)/86400000;
            $( "#hidden" )[ 0 ].value = daysn;
        }
    });
} );
